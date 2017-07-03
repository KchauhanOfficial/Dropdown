Html Code For DropDown Menu


﻿<!DOCTYPE html>
<html>
  <head>
	<meta charset="utf-8">
	<title>
	  Pure CSS Dropdown Navigation Menu
	</title>
    <link href="css/styles.css" rel="stylesheet">
  </head>
 <body>
<div class="nav">
  <ul>
	<li>Home</li>
	<li>Courses
	  <ul>
		<li>Maya </li>
		<li>Unreal Engine</li>
		<li>Unity 3D</li>
	  </ul>
	</li>
	<li>Blog</li>
	<li>About</li>
	<li>Contact</li>
  </ul>
</div>
	</body>
</html>	


CSS Code for DropDown Menu


	*{
  margin:0px;
  padding:0px;
  list-style:none;
  text-decoration:none;
}

body{
  width:100%;
  height:100%;
}

.nav ul li {
  background-color:#00b5b5;
  width:80px;
  height:40px;
  float:left;
  text-align:center;
  line-height:40px;
  color:#ffffff;
}

.nav ul ul li{
	 width:120px;
}
.nav ul ul{
  display:none;
}
.nav ul li:hover{
  background-color:#282830;
}
.nav ul li:hover ul{
  display:block;
}
