import React from 'react'
import '../styles/navbar.css'

const Header = () => {
	return (
		<div>
			<div class="dropdown">
				<nav>
					<label class="logo">DesignX </label>
					<ul>
						<li class="">
							<a href="#">
								<i class="bx bx-moon"></i>
							</a>
						</li>
						<li class="">
							<a href="#">
								<i class="bx bxs-bell"></i>
							</a>
						</li>
						<li class="">
							<a href="#">
								<i class="bx bxs-bank"></i>
							</a>
						</li>
						<li class="">
							<a href="#">
								<i class="bx bx-cog"></i>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default Header
