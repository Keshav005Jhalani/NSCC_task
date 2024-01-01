const Footer = () => {
    return(
        
        <nav className="w-[100%] h-[562px] bg-black rounded-t-[100px] flex pt-24">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            
            <div className="bg-black mx-auto">
                <div className=" bg-black text-[#26E8E8] text-[48px]">Contact </div>
                <i className="fa bg-black fa-phone" style={{ fontSize: 36 }} /><span className="text-[48px] bg-black"> :</span>
                <div className=" bg-black text-[24px]">+91 9458896788</div>
                <div className=" bg-black text-[24px]">+91 9458896088</div>
                <i className="fa bg-black fa-envelope" style={{ fontSize: 50 }}></i><span className="bg-black text-[48px]"> :</span>
                <div className=" bg-black text-[24px]">nscc.com</div>

            </div>

            <div className="bg-black mx-auto">
                <div className=" bg-black text-[#26E8E8] text-[48px]">Follow us on:</div>
                <i className="bg-black fa fa-instagram mx-[20px]" style={{ fontSize: 65 }}></i>
                <i className="bg-black fa fa-linkedin-square mx-[20px]" style={{ fontSize: 65 }}></i>
                <i className="fa bg-black fa-twitter mx-[20px]" style={{ fontSize: 65 }}></i>
                <div className=" bg-black  w-[500px] h-[130px] text-[30px] text-[#26E8E8]">Developed by NSCC SRM</div>
            </div>

            <div className="bg-black mx-auto">
                <div className=" bg-black text-[#26E8E8] text-[48px]">Navigate</div>
                
                <div className=" bg-black text-[32px]">About Us</div>
                <div className=" bg-black text-[32px]">Events</div>
                <div className=" bg-black text-[32px]">Gallery</div>
                <div className=" bg-black text-[32px]">Contact Us</div>
            </div>
        
        </nav>
    )
}
export default Footer;