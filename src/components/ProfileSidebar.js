import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

function ProfileSidebar(props) {
	/*
    TODO fetch image from Cloudinary
    */
	let profilePicPath = "./images/abraomukas.jpg";

	const sidebarStyle = {
		backgroundColor: "#235679",
		width: "250px",
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		position: "fixed",
	};

	const sideNavInactiveStyle = {
		right: "-100%",
		transition: "850ms",
	};

	const sideNavActiveStyle = {
		right: 0,
		transition: "350ms",
	};

	console.log(props.sidebar);
	return (
		<div
			style={
				props.sidebar
					? { ...sidebarStyle, ...sideNavActiveStyle }
					: { ...sidebarStyle, ...sideNavInactiveStyle }
			}>
			<div className='d-flex flex-column align-items-center'>
				<AiOutlineClose
					style={{ marginLeft: "2rem", fontSize: "2rem", background: "none" }}
				/>
				<img
					src={profilePicPath}
					className='rounded pill'
					alt='Profie pic'
					style={{ maxWidth: "30%", maxHeight: "50%" }}
				/>
			</div>
		</div>
	);
}

export default ProfileSidebar;
