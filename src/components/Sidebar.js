import React from 'react'
import '../styles/sidebar.css'
import $ from 'jquery'

const Sidebar = () => {
	$('.sidebar a').on('click', function () {
		$('.sidebar').find('.active').removeClass('active')
		$(this).parent().addClass('active')
	})
	return (
		<>
			<div class="sidebar">
				<ul>
					<li class="active">
						<i class="bx bx-tachometer"></i>
						<a href="#">Dashboard</a>
					</li>
					<li class="">
						<i class="bx bx-right-indent"></i>
						<a href="#">Inventory</a>
					</li>
					<li class="">
						<i class="bx bx-purchase-tag-alt"></i>
						<a href="#">Orders</a>
					</li>
					<li class="">
						<i class="bx bxs-ambulance"></i>
						<a href="#">Shipping</a>
					</li>
					<li class="">
						<i class="bx bxs-share-alt"></i>
						<a href="#">Channel</a>
					</li>
				</ul>
			</div>
			<div class="content-container">
				<div id="todoList" class="row"></div>
			</div>
		</>
	)
}

export default Sidebar
