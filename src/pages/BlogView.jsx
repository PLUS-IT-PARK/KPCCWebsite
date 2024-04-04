import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import url from '../baseUrl';
import BannerBlog from '../components/BannerBlog';

function BlogView() {
    const [blog, setBlog] = useState({})
    const [initialBlogs, setInitialBlogs] = useState([])
    const { slug } = useParams();
    const navigate = useNavigate();
    console.log(slug);
    const getBlogData = async () => {
        const result = await axios.get(`${url}/api/admin/get-blogs?slug=${slug}`);
        setBlog( result.data.blogs[0]);
    }
    const getInitialBlogs = async() =>{
        const result = await axios.get(`${url}/api/admin/get-blogs`)
        setInitialBlogs(result.data.blogs.slice(0,4))
    }

    
    console.log(blog);
    useEffect(() => {
        getBlogData()
        getInitialBlogs()
    }, [navigate])
    return (
        <section>
            <div>
                <BannerBlog />
            </div>
            <div>
                <main className="container-fluid py-5" style={{ backgroundColor: "#4267B2" }}>
                    <div className="blog-main-content container text-white">
                        <div className="row">
                            <div className="col-md-8">
                                <h1 className="pb-4 mb-4 font-italic border-bottom">
                                    Blogs/ Articles
                                </h1>
                                <div className="blog-post">
                                    <img style={{ height: "400px",width:"400px" }}
                                        src={blog?.image}
                                        alt=""
                                        className="w-sm-auto mx-sm-auto img-fluid rounded"
                                    />
                                    <p className="blog-post-meta my-3">{blog?.date}</p>
                                    <h2 className="blog-post-title my-5">{blog?.title}</h2>
                                    <p className="blog-post-text">
                                       {blog?.author}
                                    </p>
                                    <hr />
                                    <div className="content-wrapper">
                                        <p style={{textAlign:'justify',wordSpacing:'2px',lineHeight:'30px'}}>{blog?.description}</p>
                                    </div>
                                    <hr />
                                </div>
                                {/* /.blog-post */}
                                {/* <nav class="blog-pagination">
              <a class="btn btn-outline-light" href="#">Older</a>
              <a class="btn btn-outline-light disabled" href="#" tabindex="-1" aria-disabled="true">Newer</a>
          </nav> */}
                            </div>
                            <aside className="col-md-4 align-items-center py-5 mb-5">
                                <div className="p-4 mb-3 recent-posts">
                                    <h4 className="font-italic mb-4">Recent Posts</h4>
                                    {initialBlogs.length>0 && initialBlogs.map((obj,index)=>(
                                        <div key={index} className="row mb-4" onClick={()=>navigate(`/blogs/${obj?.slug}`)} >
                                        <div className="col-md-3 mb-3 mb-md-0">
                                            <img
                                                src={obj?.image}
                                                alt=""
                                                style={{ height: "60px",width:"80px" }}
                                                className="img-fluid rounded"
                                            />
                                        </div>
                                        <div className="col-md-9">
                                                <Link style={{textDecoration:'none'}}  className="mt-3 mt-md-0 text-white">
                                                   {obj?.title}
                                                </Link>
                                                <p>{obj?.date}</p>
                                           
                                        </div>
                                    </div>
                                    ))}
                                </div>
                                {/* <div class="p-4">
          <h4 class="font-italic mb-4">Categories</h4>
          <ol class="list-unstyled mb-0">
              <li class="mb-1"><a href="#" class="text-decoration-none text-white">CONGRESS PRESIDENT SHRI</a></li>
              <li class="mb-1"><a href="#" class="text-decoration-none text-white ">MALLIKARJUN KHARGE'S</a></li>
              <li class="mb-1"><a href="#" class="text-decoration-none text-white">OPENING REMARKS AT THE CWC </a></li>
              <li class="mb-1"><a href="#" class="text-decoration-none text-white">MEETING IN DELHI</a></li>
              
          </ol>
      </div>

          <div class="p-4">
              <h4 class="font-italic">Archives</h4>
              <ol class="list-unstyled mb-0">
                
                  <li><a href="#" class="text-decoration-none text-white">December 2023</a></li>
                  <li><a href="#" class="text-decoration-none text-white">November 2023</a></li>
                  <li><a href="#" class="text-decoration-none text-white">November - 0001</a></li>
                  
              </ol>
          </div> */}
                            </aside>
                        </div>
                        {/* /.row */}
                    </div>
                </main>

            </div>
        </section>
    )
}

export default BlogView