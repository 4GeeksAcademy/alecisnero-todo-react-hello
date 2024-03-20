import React from "react";
import NewTask from "./NewTask";
import logoToDo from "../../img/logo-tasks.png"

//create your first component
const Home = () => {
	return (
		<div className="container">

			{/* CARD HEADER */}
			<div className="d-flex 
			flex-column 
			justify-content-center align-items-center">
				<div className="d-flex 
					justify-content-center 
					align-items-center 
					mb-5"
						style={{
							width: '100vw',
							height: '80px',
							backgroundColor: 'rgb(201, 201, 201)',
							boxShadow: '0px 10px 50px 0.5px black'
						}}>
						<img className="edit-logo" src={logoToDo} alt="logo" />
						<h1 className="edit-h1 mt-3 ms-2">To Do List</h1>
					</div>
				

				{/* CARD BODY */}
				<div>
					<NewTask />
				</div>
			</div>
		</div>
	);
};

export default Home;
