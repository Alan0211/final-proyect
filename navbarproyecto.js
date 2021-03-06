import React from "react";
import { Link } from "react-router-dom";




const Navbarproyecto = () => {
	return (
		<nav className="navbar navbar-dark bg-dark text-white">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 fs-2">Controlify Pro</span>
				</Link>
				<div className="ml-auto"> 
				<Link to="/Login">
					<span className="navbar-brand mb-0 fs-2">Log In</span>
				</Link>
				
                <Link to="/Login">
					<span className="navbar-brand mb-0 fs-2">Mis horas</span>
				</Link>
				<Link to= "/contact">				
					<span className="navbar-brand mb-0 fs-2">Proyectos</span>
				</Link>
                <Link to= "/contact">				
					<span className="navbar-brand mb-0 fs-2">Trabajadores</span>
				</Link>
                <Link to="/Login">
					<span className="navbar-brand mb-0 fs-2">Actividades</span>
				</Link>
								              
				</div> 
			</div>
		</nav>
	);
};

export default Navbarproyecto;