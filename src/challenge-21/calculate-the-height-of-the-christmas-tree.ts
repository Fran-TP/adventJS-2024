function treeHeight(
  tree: { value: string; left: any; right: any } | null
): number {
  if (!tree) return 0

  return Math.max(treeHeight(tree.left), treeHeight(tree.right)) + 1
}
