import { defineMdastPlugin } from "satteri";

export function demoteHeadings() {
	return defineMdastPlugin({
		name: "demote-headings",
		heading(node, ctx) {
			if (node.depth < 6) {
				ctx.setProperty(node, "depth", node.depth + 1);
			}
		},
	});
}

export function unwrapImages() {
	return defineMdastPlugin({
		name: "unwrapImages",
		paragraph(node) {
			const child = node.children[0];
			if (node.children.length === 1 && child?.type === "image") {
				return child;
			}
		},
	});
}
