<?php

class CategoriesController extends VanillaController
{

	function beforeAction()
	{
	}

	function view($categoryId = null)
	{
		$this->Category->where('parent_id', $categoryId);
		$this->Category->showHasOne();
		$this->Category->showHasMany();
		$subcategories = $this->Category->search();
		$this->Category->id = $categoryId;
		$this->Category->showHasOne();
		$this->Category->showHasMany();
		$category = $this->Category->search();
		$this->set('subcategories', $subcategories);
		$this->set('category', $category);
	}
	function viewProducts($categoryId = null, $categoryName = null)
	{
		$categories = performAction('products', 'findProducts', array($categoryId, $categoryName));
	}

	function add($categoryName, $parentId = 0)
	{
		$categoryName = $_POST['category'];
		$this->Category->name = $categoryName;
		$this->Category->parent_id = $parentId;
		$this->Category->save();

	}
	function addview($parentId, $categoryName = null)
	{
		$this->set('parent_id', $parentId);
		$this->set('category_name', $categoryName);
	}
	function updateview($parentId, $categoryName = null)
	{
		$this->set('parent_id', $parentId);
		$this->set('category_name', $categoryName);
	}

	function update($categoryName, $parentId = 0)
	{
		$categoryName = $_POST['category'];
		$this->Category->name = $categoryName;
		$this->Category->parent_id = $parentId;
		$this->Category->save();
	}
	function delete($categoryId)
	{
		$this->Category->id = $categoryId;
		$this->Category->delete();
	}

	function index()
	{
		$this->Category->orderBy('name', 'ASC');
		$this->Category->showHasOne();
		$this->Category->showHasMany();
		$this->Category->where('parent_id', '0');
		// $this->Category->where('parent_id','1');
		// $this->Category->where('parent_id','2');
		$categories = $this->Category->search();
		$this->set('categories', $categories);
	}

	function afterAction()
	{
	}
}
