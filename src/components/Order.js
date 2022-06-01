import React from 'react'
import '../styles/order.css'

const Order = () => {
	const Person = [
		{
			orderNo: 'TKN20203751',
			orderDate: '2022-05-04',
			city: 'Lucknow',
			CustomerName: 'Abhishek Dixit',
			orderValue: '0.00',
			Status: 'Panding',
			operation: 'Action'
		},
		{
			orderNo: 'TKN20203752',
			orderDate: '2022-05-04',
			city: 'Lucknow',
			CustomerName: 'Abhishek Dixit',
			orderValue: '0.00',
			Status: 'Panding',
			operation: 'Action'
		},
		{
			orderNo: 'TKN20203753',
			orderDate: '2022-05-04',
			city: 'Lucknow',
			CustomerName: 'Abhishek Dixit',
			orderValue: '0.00',
			Status: 'Panding',
			operation: 'Action'
		},
		{
			orderNo: 'TKN20203753',
			orderDate: '2022-05-04',
			city: 'Lucknow',
			CustomerName: 'Abhishek Dixit',
			orderValue: '0.00',
			Status: 'Panding',
			operation: 'Action'
		},
		{
			orderNo: 'TKN20203753',
			orderDate: '2022-05-04',
			city: 'Lucknow',
			CustomerName: 'Abhishek Dixit',
			orderValue: '0.00',
			Status: 'Panding',
			operation: 'Action'
		},
		{
			orderNo: 'TKN20203753',
			orderDate: '2022-05-04',
			city: 'Lucknow',
			CustomerName: 'Abhishek Dixit',
			orderValue: '0.00',
			Status: 'Panding',
			operation: 'Action'
		},
		{
			orderNo: 'TKN20203753',
			orderDate: '2022-05-04',
			city: 'Lucknow',
			CustomerName: 'Abhishek Dixit',
			orderValue: '0.00',
			Status: 'Panding',
			operation: 'Action'
		},
		{
			orderNo: 'TKN20203753',
			orderDate: '2022-05-04',
			city: 'Lucknow',
			CustomerName: 'Abhishek Dixit',
			orderValue: '0.00',
			Status: 'Panding',
			operation: 'Action'
		}
	]
	return (
		<div className="order-container">
			<div className="buttons">
				<button>
					<i class="bx bxs-left-arrow-square"></i>Import Order
				</button>
				<button>
					<i class="bx bx-paper-plane"></i>Accept
				</button>
				<button>
					<i class="bx bx-printer"></i>Print
				</button>
				<button className="btn-refresh">
					<i class="bx bx-refresh"></i>Refresh
				</button>
			</div>
			<ul>
				<li></li>
				<li>
					<input type="checkbox" />
				</li>
				<li>Channel</li>
				<li>Order No</li>
				<li>Order Date</li>
				<li>City</li>
				<li>Customer Name</li>
				<li>Order Value</li>
				<li>Status</li>
				<li>Operation</li>
			</ul>
			{Person.map((p) => {
				return (
					<div>
						<ul>
							<li>
								<i class="bx bx-plus"></i>
							</li>
							<li>
								<input type="checkbox" />
							</li>
							<li>
								<i class="bx bx-dollar"></i>
							</li>
							<li>{p.orderNo}</li>
							<li>{p.orderDate}</li>
							<li>{p.city}</li>
							<li>{p.CustomerName}</li>
							<li>{p.orderValue}</li>
							<li>{p.Status}</li>
							<li>{p.operation}</li>
						</ul>
					</div>
				)
			})}
			<div>hello</div>
		</div>
	)
}

export default Order
