def inorderTraversal(root: Optional[TreeNode]) -> List[int]:
        ans=[]
        def rec_traversal(node,ls):
            if node is None:
                return
            rec_traversal(node.left,ls)
            ls.append(node.val)
            rec_traversal(node.right,ls)
            
            return ans
        return rec_traversal(root,ans)
