import React from 'react';
import { NavLink } from 'react-router-dom'

function Web(props){
    return(
   <section>
        <div className="header">
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <h1 className='h'>FlipKart</h1>
                      
                </div>
                <nav>
                    <ul>
                        <li><NavLink><h2 className="a">Home</h2></NavLink></li>
                        <li><NavLink><h2 className="a">Product</h2></NavLink></li>
                        <li><NavLink><h2 className="a">About</h2></NavLink></li>
                        <li><NavLink><h2 className="a">Contact</h2></NavLink></li>
                        <li><NavLink><h2 className="a">Account</h2></NavLink></li>
                    </ul>
                    </nav>
            </div>
        </div>
    
        <div className="row">
            <div className="col-2">
                <h1>Give your Workout <br/>A new Style</h1>
                <p >This is Best</p>
                <NavLink className="btn">Explore Now</NavLink>
            </div>
            <div className="col-2">
            <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width="500px" height="450px" className='v'/>
            </div>
        </div>
    </div>

    {/* <!-- -----------------Future Categories........... --> */}
    <div className="categories">
        <div className="small-container">
            <div className=" row">
                <div className="col-3">
                    <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                </div>
        
                <div className="col-3">
                    <img src="https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                </div>
        
                <div className="col-3">
                    <img src="https://images.pexels.com/photos/3907507/pexels-photo-3907507.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                </div>
            </div>
        </div>
    </div>
    
    {/* ........Future products........ */}

    <div className="small-container">
        <h2 className="title">Featured Products</h2>
        <div className="row">
            <div className="col-4">
                <img src="https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                <h4>Camera</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum obcaecati tempora veritatis nostrum repellat quisquam. In provident id placeat autem nulla earum consectetur veniam, quod necessitatibus, quisquam corporis enim nam!</p>
                <p>$50.00</p>
            </div>

            <div className="col-4">
                <img src="https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                <h4>Camera</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum obcaecati tempora veritatis nostrum repellat quisquam. In provident id placeat autem nulla earum consectetur veniam, quod necessitatibus, quisquam corporis enim nam!</p>
                <p>$50.00</p>
            </div>

            <div className="col-4">
                <img src="https://images.pexels.com/photos/4735904/pexels-photo-4735904.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                <h4>Camera</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum obcaecati tempora veritatis nostrum repellat quisquam. In provident id placeat autem nulla earum consectetur veniam, quod necessitatibus, quisquam corporis enim nam!</p>
                <p>$50.00</p>
            </div>

            <div className="col-4">
                <img src="https://images.pexels.com/photos/10029870/pexels-photo-10029870.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                <h4>Camera</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum obcaecati tempora veritatis nostrum repellat quisquam. In provident id placeat autem nulla earum consectetur veniam, quod necessitatibus, quisquam corporis enim nam!</p>
                <p>$50.00</p>
            </div>
        </div>
    </div>



        <h2 className="title">Latest Products</h2>
        <div className="row">
            <div className="col-4">
                <img src="https://images.pexels.com/photos/12166276/pexels-photo-12166276.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                <h4>Camera</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum obcaecati tempora veritatis nostrum repellat quisquam. In provident id placeat autem nulla earum consectetur veniam, quod necessitatibus, quisquam corporis enim nam!</p>
                <p>$50.00</p>
            </div>

            <div className="col-4">
                <img src="https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                <h4>Camera</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum obcaecati tempora veritatis nostrum repellat quisquam. In provident id placeat autem nulla earum consectetur veniam, quod necessitatibus, quisquam corporis enim nam!</p>
                <p>$50.00</p>
            </div>

            <div className="col-4">
                <img src="https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                <h4>Camera</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum obcaecati tempora veritatis nostrum repellat quisquam. In provident id placeat autem nulla earum consectetur veniam, quod necessitatibus, quisquam corporis enim nam!</p>
                <p>$50.00</p>
            </div>

            <div className="col-4">
                <img src="https://images.pexels.com/photos/3833639/pexels-photo-3833639.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                <h4>Camera</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum obcaecati tempora veritatis nostrum repellat quisquam. In provident id placeat autem nulla earum consectetur veniam, quod necessitatibus, quisquam corporis enim nam!</p>
                <p>$50.00</p>
            </div>

            <div className="col-4">
                <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                <h4>Camera</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum obcaecati tempora veritatis nostrum repellat quisquam. In provident id placeat autem nulla earum consectetur veniam, quod necessitatibus, quisquam corporis enim nam!</p>
                <p>$50.00</p>
            </div>

            <div className="col-4">
                <img src="https://images.pexels.com/photos/6370383/pexels-photo-6370383.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                <h4>Camera</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum obcaecati tempora veritatis nostrum repellat quisquam. In provident id placeat autem nulla earum consectetur veniam, quod necessitatibus, quisquam corporis enim nam!</p>
                <p>$50.00</p>
            </div>

            <div className="col-4">
                <img src="https://images.pexels.com/photos/4132542/pexels-photo-4132542.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                <h4>Camera</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum obcaecati tempora veritatis nostrum repellat quisquam. In provident id placeat autem nulla earum consectetur veniam, quod necessitatibus, quisquam corporis enim nam!</p>
                <p>$50.00</p>
            </div>

            <div className="col-4">
                <img src="https://images.pexels.com/photos/4097119/pexels-photo-4097119.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                <h4>Camera</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum obcaecati tempora veritatis nostrum repellat quisquam. In provident id placeat autem nulla earum consectetur veniam, quod necessitatibus, quisquam corporis enim nam!</p>
                <p>$50.00</p>
            </div>
        </div>
 

    {/* <!-- ..................offer.............. --> */}
    <div className="offer">
        <div className="small-container">
            <div className="row">
                <div className="col-2">
                    <img src="https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" class="offer-img"/>
                </div>

                <div className="col-2">
                    <p>Exclusive Availabe on Store</p>
                    <h1>Somethings</h1>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illo ratione dolore eum nulla tempore assumenda enim provident impedit. Eos magnam quisquam dignissimos eaque maxime ea inventore.</small><br/>
                    <NavLink className="btn">Buy Now</NavLink>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- .................testimonial............. --> */}

    <div className="testimonial">
        <div className="small-container">
            <div className="row">
                <div className="col-3">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit temporibus cum illo dolorem! A facilis mollitia maxime molestiae? Fugit itaque natus blanditiis dolor quibusdam excepturi minima impedit consectetur adipisci.</p>
                    <img src="https://images.pexels.com/photos/12879014/pexels-photo-12879014.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                    <h3>Vaiji</h3>
                </div>

                <div className="col-3">
                    
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit temporibus cum illo dolorem! A facilis mollitia maxime molestiae? Fugit itaque natus blanditiis dolor quibusdam excepturi minima impedit consectetur adipisci.</p>
    
                    <img src="https://images.pexels.com/photos/16948299/pexels-photo-16948299/free-photo-of-close-up-of-pink-flowers.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                    <h3>Pavan</h3>
                </div>

                <div className="col-3">
                   
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit temporibus cum illo dolorem! A facilis mollitia maxime molestiae? Fugit itaque natus blanditiis dolor quibusdam excepturi minima impedit consectetur adipisci.</p>
                   
                    <img src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                    <h3>Tejas</h3>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- ................footer.............. --> */}
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col-1">
                    <h3>Download our App</h3>
                    <p>Download app for android and ios mobile phone.</p>
                </div>

                <div className="footer-col-2">
                    <img src="" alt=""/>
                </div>

                <div className="footer-col-3">
                    <h3>Useful Links</h3>
                    <ul>
                        <li>Coupons</li>
                        <li>Blog Post</li>
                        <li>Return Policy</li>
                    </ul>
                </div>

                <div className="footer-col-4">
                    <h3>Follow us</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Youtube</li>
                    </ul>
                </div>
            </div>
            <p class="copy">Copyright  2023 -Easy Tutorials</p>
        </div>
    </div>
   </section>  

    )
}
export default Web