def tree2str(root) -> str:
    #helper function
    def rec_tree_str(node):
        #base case
        if node is None:
            return ""
        
        re=str(node.val)
        
        left=rec_tree_str(node.left)
        right=rec_tree_str(node.right)
        
        if left and right:
            return re + "(" + left + ")" + "(" + right + ")"
        elif left:
            return re+"("+left+")"
        elif right:
            return re+"()("+right+")"
        else:
            return re

    return rec_tree_str(root)

