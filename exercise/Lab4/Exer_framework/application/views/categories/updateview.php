<?php echo '<form action=' .'"' . BASE_PATH . 'categories/update'.'/'.$parent_id .'/' . $category_name.'" ' . 'method="post">' ?>
<input type="text" onclick="this.value=''" name="category">
<!-- <input type="text" onclick="this.value=''" name="parent_id"> -->
<input type="submit" value="Edit" >
</form>