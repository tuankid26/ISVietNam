<div class="category">
    <?php echo $html->link('Add a new category', 'categories/addview/0') ?>
</div>
<div>
    <h2>Please select a category</h2>
    <?php foreach ($categories as $category) : ?>
        <div class="category">

            <?php echo $html->link($category['Category']['name'], 'categories/view/' . $category['Category']['id'] . '/' . $category['Category']['name']) ?>
            <!-- <?php echo 'categories/view/' . $category['Category']['id'] . '/' . $category['Category']['name']?> -->
            <!-- <?php echo $html->link('Edit category', 'categories/updateview') ?> -->
        </div>
    <?php endforeach ?>


</div>