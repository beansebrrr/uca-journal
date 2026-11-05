---
title: Colors, Images, and Filters !!!
pubDate: 2026-10-23
week: 2
links:
  - label: Go to repository
    href: https://github.com/beansebrrr/uca-aic-notebooks/tree/main/week-02
---

Last week, we learned about the basics of Python, and a little bit of `numpy` and `matplotlib`. This week, we're going to get a lot more use out of the `numpy` library. This topic is going to tackle how information is stored in images, and how we can use that to our advantage.

# Images and Numbers

Last week, we've established that a color's information can be stored in the form of 3 values representing the intensity of red, green, and blue (RGB) in said color.

In the context of images, we can treat this singular color as a *pixel*. If we put multiple pixels together as an *array*, it would look like a row of colors. Now if we put multiple rows together, it could look like a grid.

```py
"""Just try to imagine it for now:
`1` is the color white, while `0` is the color black"""
pixel = 0

one_dimensional_array = [1, 1, 1, 0, 0, 1, 1, 1]

two_dimensional_array = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 1, 0, 0, 1],
    [1, 0, 0, 1, 1, 0, 0, 1],
    [1, 1, 1, 0, 0, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
]
```

As you can see, with that grid and just those two colors, we are able to form an image.

More commonplace image file formats like `.jpeg` follow the same principle. Pixels containing their respective RGB values are laid down in a two-dimensional array, resembling a grid. And when viewed altogether, an image is revealed.

```py
# Convert image into a two-dimensional array
image = np.array(
  Image.open("example.png").convert("RGB")
)
print(image[0, 0])
```

Assuming you have an `example.png` ready to be loaded, running this program is going to convert the image into a two-dimensional array, ready to be read. It then reads the contents of the pixel positioned at `0, 0` (the very top left). This will return an *array* of 3 values corresponding to their RGB values respectively

```py
# [red, green, blue]
> [143, 120, 104]
```

Now that we know how images work, we kind of have everything we need to make our own filters.

# Filters

We were already provided with filters to play around with. The only thing we really had to do was to combine them to make a whole new type of image. We tried out `swap_channels()` to switch around the RGB values, added `noise()` for that extra texture, and `row_shift_glitch()` repositions the pixels at an x-axis. In the end, we came up with these

![Filter pair 1: Cat](@assets/images/filter-pair-1.png)
![Filter pair 2: Butterfly](@assets/images/filter-pair-2.png)
![Filter pair 3: Oranges](@assets/images/filter-pair-3.png)

Now, the images feel a little like they were corrupted, or that they all came from a different side of reality. It feels like you're peering into a kaleidoscope, or experiencing hallucinations. It's quite the fun experiment.

# Stretch: Making our own filter

This is less of making our own filter, and more trying to recreate one. The sepia filter is laid over the original image by performing a specific algorithm onto each of the rgb values, via matrix multiplication.

```py
new_red   = 0.393 * original_red + 0.769 * original_green + 0.189 * original_blue
new_green = 0.349 * original_red + 0.686 * original_green + 0.168 * original_blue
new_blue  = 0.272 * original_red + 0.534 * original_green + 0.131 * original_blue
```

Luckily, we can perform matrix multiplication on numpy arrays. We just first have to define the matrix.

```py
sepia_matrix = np.array([
    [0.393, 0.769, 0.189],
    [0.349, 0.686, 0.168],
    [0.272, 0.534, 0.131]
])

# The `@` symbol is the matrix multiplication operator
# `np.clip()` ensures the values never go below 0 or beyond 255
sepia_image = np.clip(image @ sepia_matrix.T, 0, 255)
```

With that, we have implemented a sepia filter using `numpy`! (wow *\*round of applause\**)
