import React from "react";

const Drawer = () => {
	return (
		<>
			<div className="drawer">
				<input id="my-drawer" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content">
					{/* <!-- Page content here --> */}
					<label className="btn btn-primary drawer-button">Open drawer</label>
				</div>
				<div className="drawer-side">
					<label className="drawer-overlay"></label>
					<ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
						{/* <!-- Sidebar content here --> */}
						<li>
							<a>Sidebar Item 1</a>
						</li>
						<li>
							<a>Sidebar Item 2</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Drawer;
