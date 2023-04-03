import React, { useState,useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Swal from 'sweetalert2';
function Blog(props) {
    let [loading,setLoading]=useState(false)


    let [Data, setData] = useState([
        {image:"https://st.depositphotos.com/2691351/3926/i/600/depositphotos_39265023-stock-photo-a-stethoscope-is-lying-with.jpg",title:"Harvard Health Blog",desciption:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"},
        {image:"https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/09/23/Pictures/stethoscope-and-piles-of-books_f2fb5012-fd0b-11ea-b6be-dd713e54f208.jpg",title:"American Heart Association",desciption:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"},
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYyhTSRFuAFIKCnZGuWfgMAY2TeahUvBrHAQ&usqp=CAU",title:"Misconceptions about a condition",desciption:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"},
        {image:"https://wwwassets.rand.org/content/rand/blog/2022/07/diversity-equality-and-inclusion-in-healthcare-innovation/jcr:content/par/teaser.aspectfit.0x1200.jpg/1665020930655.jpg",title:"How to know if the medicine is effective or not",desciption:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"},
        {image:"https://media.istockphoto.com/id/1278800031/photo/portrait-of-nurse-and-man-with-face-masks-coronavirus-covid-19-and-vaccination-concept.jpg?s=612x612&w=0&k=20&c=yD0ooh3JobwflfkOYB5RhtKp9PJLuV9Q6F25WocMAZY=",title:"The guide on having a healthy mind",desciption:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"},
        {image:"https://img.freepik.com/free-photo/group-healthcare-workers-with-protective-face-masks-talking-hospital-hallway_637285-9089.jpg?w=360",title:"How to lessen the side-effects of medications",desciption:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"},
        {image:"https://www.wowza.com/wp-content/uploads/Graphics-Internet-of-Medical-Things_BlogThumbnail-690x350-1.png",title:"Different diseases that do not have any cures until now",desciption:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"},
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvOdpOZcnVhePk5Nz67xe3orjOT26b0_joQdlMka3sDUWZg0CVaaU9BAop56erAE-iXoA&usqp=CAU",title:"Weirdest facts about the medical industry",desciption:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"},
    ])





    const [list, setList] = useState("");


    const [pageNumber, setPageNumber] = useState(0);

    const DataPerPage = 2;
    const pagesVisited = pageNumber * DataPerPage;

    const pageCount = Math.ceil(Data.length / DataPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };




    let open_modal = ({ title, desciption, image }) => {

        console.log(title, desciption, image);
        Swal.fire({
            title: `${title}`,
            text: `${desciption}`,
            imageUrl: `${image}`,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            confirmButtonText:'X',
            confirmButtonColor: '#00D9A5',
        })
    }

    return (



        <div>
            <div className="page-section">
                <div className="container">
                    <h2 className='text-center bg-light p-3'>Blogs</h2>
                    <div className="row">

                        <div className="sidebar col-md-6 my-2">
                            <div className="sidebar-block">
                                <h3 className="sidebar-title">Search</h3>
                                <form action="#" className="search-form">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Type a keyword To Search" onChange={(event) => {
                                            setList(event.target.value);
                                        }} />
                                        <span className="icon mai-search" />
                                    </div>
                                </form>
                            </div>



                            <div className="sidebar-block">
                                <h3 className="sidebar-title">Paragraph</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                            </div>
                        </div>

                        {loading?<div className='d-flex justify-content-center'>
    <div className="spinner-grow text-dark text-secondary"style={{"color":"gray"}}  role="status">
  </div>
</div>:

                        <div className='col-md-6 col-sm-12' style={{ "display": "flex", "flexWrap": "wrap", "justifyContent": "center" , "minHeight":"490px"}}>
                            {Data.slice(pagesVisited, pagesVisited + DataPerPage).filter((item) => {
                                if (list === "") {
                                    return item;
                                }
                                else if (item.title.toLowerCase()
                                    .includes(list.toLowerCase())) {
                                    return item
                                }

                            }).map((item) => (

                                <div className=" col-md-5 col-sm-7 py-2 mx-3" style={{ "minWidth": "260px" }}>
                                    <div className="card-blog">
                                        <div className="header">
                                            <div className="post-category">
                                                <span href="#">{item.desciption.slice(0, 5)}</span>
                                            </div>
                                            <span  className="post-thumb" >
                                                <img src={item.image}/>
                                            </span>
                                        </div>
                                        <div className="body">
                                            <h5 className="post-title" style={{ cursor: "pointer" }}  onClick={() => open_modal(item)} >{item.title}</h5>

                                        </div>
                                    </div>
                                </div>

                            ))
                            }

                        </div>

                        }

                    </div> {/* .row */}
                </div> {/* .container */}


                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />

            </div> {/* .page-section */}
        </div>

    );
}

export default Blog;