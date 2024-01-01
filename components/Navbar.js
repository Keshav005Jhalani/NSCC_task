const Navbar = () =>{
    return(
        
        <nav className="flex bg-black bg-black ">
            <div className=" bg-black h-[34px] ml-[43px] mt-[30px] aboutclass">About Us</div>
            <div className=" bg-black ml-[132px] mt-[30px] mr-[475px] h-[34px] w-[646px] ">
                <ul className=" bg-black flex justify-between navclass text-[#26E8E8]">
                    <li className="">Our Team</li>
                    <li className="">Events</li>
                    <li className="">Gallery</li>
                    <li className="">Contact Us</li>
                </ul>
            </div>
            <div className=" bg-black mt-[15px] w-[78px] h-[78px]  "></div>
        </nav>
    )   
}
export default Navbar;