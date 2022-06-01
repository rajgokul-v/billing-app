import React from 'react'
import '../styles/content.css'
import $ from 'jquery'

const content = () => {
	$('.icon a').on('click', function () {
		$('.icon').find('.active').removeClass('active')
		$(this).parent().addClass('active')
	})
	return (
		<div class="icon">
			<ul>
				<li class="active">
					<a href="#">Pending</a>
				</li>
				<li class="">
					<a href="#">AWB Created</a>
				</li>
				<li class="">
					<a href="#">Ready to Ship</a>
				</li>
				<li class="">
					<a href="#">Accepted</a>
				</li>
				<li class="">
					<a href="#">Completed</a>
				</li>
				<li class="">
					<a href="#">Cancelled</a>
				</li>
			</ul>
		</div>
	)
}

export default content
