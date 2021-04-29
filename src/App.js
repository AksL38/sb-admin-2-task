import './App.css';
import Card from './Card';
import ColorBlocks from './ColorBlocks';
import ProgressBar from './ProgressBar';

function App() {
  const cardsData = [
    {
      color: 'primary',
      title: 'Earnings (Monthly)',
      progress: false,
      info: '$40,000',
      icon: 'fa-calendar'
    },
    {
      color: 'success',
      title: 'Earnings (Annual)',
      progress: false,
      info: '$215,000',
      icon: 'fa-dollar-sign'
    },
    {
      color: 'info',
      title: 'Tasks',
      progress: true,
      info: '50%',
      icon: 'fa-clipboard-list'
    },
    {
      color: 'warning',
      title: 'Pending Requests',
      progress: false,
      info: '18',
      icon: 'fa-comments'
    }    
  ]

  const projectsData = [
    {
      title: 'Server Migration ',
      progress: '20%',
      color: 'danger'
    },
    {
      title: 'Sales Tracking ',
      progress: '40%',
      color: 'warning'
    },
    {
      title: 'Customer Database ',
      progress: '60%',
      color: 'primary'
    },
    {
      title: 'Payout Details ',
      progress: '80%',
      color: 'info'
    },
    {
      title: 'Account Setup ',
      progress: '100%',
      color: 'success'
    }    
  ]

  const colorsData = [
    {
      color: 'primary',
      code: '#4e73df',
      block: false
    },
    {
      color: 'success',
      code: '#1cc88a',
      block: false
    },
    {
      color: 'info',
      code: '#36b9cc',
      block: false
    },
    {
      color: 'warning',
      code: '#f6c23e',
      block: false
    },
    {
      color: 'danger',
      code: '#e74a3b',
      block: false
    },
    {
      color: 'secondary',
      code: '#858796',
      block: false
    },
    {
      color: 'light',
      code: '#f8f9fc',
      block: true
    },
    {
      color: 'dark',
      code: '#5a5c69',
      block: false
    }    
  ]

  return (
    <div id="wrapper">
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


        <span className="linkCursor sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </span>


        <hr className="sidebar-divider my-0" />


        <li className="nav-item active">
          <span className="linkCursor nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></span>
        </li>


        <hr className="sidebar-divider" />


        <div className="sidebar-heading">
          Interface
</div>


        <li className="nav-item">
          <span className="nav-link collapsed linkCursor" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span>Components</span>
          </span>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <span className="linkCursor collapse-item" href="buttons.html">Buttons</span>
              <span className="linkCursor collapse-item" href="cards.html">Cards</span>
            </div>
          </div>
        </li>


        <li className="nav-item">
          <span className="nav-link collapsed linkCursor" data-toggle="collapse" data-target="#collapseUtilities"
            aria-expanded="true" aria-controls="collapseUtilities">
            <i className="fas fa-fw fa-wrench"></i>
            <span>Utilities</span>
          </span>
          <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <span className="linkCursor collapse-item" href="utilities-color.html">Colors</span>
              <span className="linkCursor collapse-item" href="utilities-border.html">Borders</span>
              <span className="linkCursor collapse-item" href="utilities-animation.html">Animations</span>
              <span className="linkCursor collapse-item" href="utilities-other.html">Other</span>
            </div>
          </div>
        </li>


        <hr className="sidebar-divider" />


        <div className="sidebar-heading">
          Addons
</div>


        <li className="nav-item">
          <span className="nav-link collapsed linkCursor" data-toggle="collapse" data-target="#collapsePages"
            aria-expanded="true" aria-controls="collapsePages">
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </span>
          <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <span className="linkCursor collapse-item" href="login.html">Login</span>
              <span className="linkCursor collapse-item" href="register.html">Register</span>
              <span className="linkCursor collapse-item" href="forgot-password.html">Forgot Password</span>
              <div className="collapse-divider"></div>
              <h6 className="collapse-header">Other Pages:</h6>
              <span className="linkCursor collapse-item" href="404.html">404 Page</span>
              <span className="linkCursor collapse-item" href="blank.html">Blank Page</span>
            </div>
          </div>
        </li>


        <li className="nav-item">
          <span className="linkCursor nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span></span>
        </li>


        <li className="nav-item">
          <span className="linkCursor nav-link" href="tables.html">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span></span>
        </li>


        <hr className="sidebar-divider d-none d-md-block" />


        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>


        <div className="sidebar-card d-none d-lg-flex">
          <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..." />
          <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
          <span className="linkCursor btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</span>
        </div>

      </ul>
 
        <div id="content-wrapper" className="d-flex flex-column">            
            <div id="content">                
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    
                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                        <i className="fa fa-bars"></i>
                    </button>

                    
                    <form
                        className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <i className="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    
                    <ul className="navbar-nav ml-auto">

                        
                        <li className="nav-item dropdown no-arrow d-sm-none">
                            <span className="nav-link dropdown-toggle linkCursor" id="searchDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-search fa-fw"></i>
                            </span>
                            
                            <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                aria-labelledby="searchDropdown">
                                <form className="form-inline mr-auto w-100 navbar-search">
                                    <div className="input-group">
                                        <input type="text" className="form-control bg-light border-0 small"
                                            placeholder="Search for..." aria-label="Search"
                                            aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>

                        
                        <li className="nav-item dropdown no-arrow mx-1">
                            <span className="nav-link dropdown-toggle linkCursor" id="alertsDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-bell fa-fw"></i>
                                
                                <span className="badge badge-danger badge-counter">3+</span>
                            </span>
                            
                            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="alertsDropdown">
                                <h6 className="dropdown-header">
                                    Alerts Center
                                </h6>
                                <span className="dropdown-item d-flex align-items-center linkCursor">
                                    <div className="mr-3">
                                        <div className="icon-circle bg-primary">
                                            <i className="fas fa-file-alt text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="small text-gray-500">December 12, 2019</div>
                                        <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                    </div>
                                </span>
                                <span className="dropdown-item d-flex align-items-center linkCursor">
                                    <div className="mr-3">
                                        <div className="icon-circle bg-success">
                                            <i className="fas fa-donate text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="small text-gray-500">December 7, 2019</div>
                                        $290.29 has been deposited into your account!
                                    </div>
                                </span>
                                <span className="dropdown-item d-flex align-items-center" >
                                    <div className="mr-3">
                                        <div className="icon-circle bg-warning">
                                            <i className="fas fa-exclamation-triangle text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="small text-gray-500">December 2, 2019</div>
                                        Spending Alert: We've noticed unusually high spending for your account.
                                    </div>
                                </span>
                                <span className="linkCursor dropdown-item text-center small text-gray-500" >Show All Alerts</span>
                            </div>
                        </li>

                        
                        <li className="nav-item dropdown no-arrow mx-1">
                            <span className="linkCursor nav-link dropdown-toggle"  id="messagesDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-envelope fa-fw"></i>
                                
                                <span className="badge badge-danger badge-counter">7</span>
                            </span>
                            
                            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="messagesDropdown">
                                <h6 className="dropdown-header">
                                    Message Center
                                </h6>
                                <span className="linkCursor dropdown-item d-flex align-items-center" >
                                    <div className="dropdown-list-image mr-3">
                                        <img className="rounded-circle" src="img/undraw_profile_1.svg"
                                            alt="..."/>
                                        <div className="status-indicator bg-success"></div>
                                    </div>
                                    <div className="font-weight-bold">
                                        <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                            problem I've been having.</div>
                                        <div className="small text-gray-500">Emily Fowler · 58m</div>
                                    </div>
                                </span>
                                <span className="linkCursor dropdown-item d-flex align-items-center" >
                                    <div className="dropdown-list-image mr-3">
                                        <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                            alt="..."/>
                                        <div className="status-indicator"></div>
                                    </div>
                                    <div>
                                        <div className="text-truncate">I have the photos that you ordered last month, how
                                            would you like them sent to you?</div>
                                        <div className="small text-gray-500">Jae Chun · 1d</div>
                                    </div>
                                </span>
                                <span className="linkCursor dropdown-item d-flex align-items-center" >
                                    <div className="dropdown-list-image mr-3">
                                        <img className="rounded-circle" src="img/undraw_profile_3.svg"
                                            alt="..."/>
                                        <div className="status-indicator bg-warning"></div>
                                    </div>
                                    <div>
                                        <div className="text-truncate">Last month's report looks great, I am very happy with
                                            the progress so far, keep up the good work!</div>
                                        <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                                    </div>
                                </span>
                                <span className="linkCursor dropdown-item d-flex align-items-center" >
                                    <div className="dropdown-list-image mr-3">
                                        <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                            alt="..."/>
                                        <div className="status-indicator bg-success"></div>
                                    </div>
                                    <div>
                                        <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                            told me that people say this to all dogs, even if they aren't good...</div>
                                        <div className="small text-gray-500">Chicken the Dog · 2w</div>
                                    </div>
                                </span>
                                <span className="linkCursor dropdown-item text-center small text-gray-500" >Read More Messages</span>
                            </div>
                        </li>

                        <div className="topbar-divider d-none d-sm-block"></div>

                        
                        <li className="nav-item dropdown no-arrow">
                            <span className="linkCursor nav-link dropdown-toggle"  id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                <img className="img-profile rounded-circle"
                                    src="img/undraw_profile.svg" alt=""/>
                            </span>
                            
                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <span className="linkCursor dropdown-item" >
                                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </span>
                                <span className="linkCursor dropdown-item" >
                                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </span>
                                <span className="linkCursor dropdown-item" >
                                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </span>
                                <div className="dropdown-divider"></div>
                                <span className="linkCursor dropdown-item"  data-toggle="modal" data-target="#logoutModal">
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </span>
                            </div>
                        </li>

                    </ul>

                </nav>
             
          
                <div className="container-fluid">                    
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <span className="linkCursor d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</span>
                    </div>                    
                    <div className="row">
                      {
                        cardsData.map((obj) => {
                          return <Card data={obj}></Card>
                        })
                      }            
                        
                    </div>                   

                    <div className="row">                       
                        <div className="col-xl-8 col-lg-7">
                            <div className="card shadow mb-4">
                                
                                <div
                                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                    <div className="dropdown no-arrow">
                                        <span className="linkCursor dropdown-toggle"  role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div className="dropdown-header">Dropdown Header:</div>
                                            <span className="linkCursor dropdown-item" >Action</span>
                                            <span className="linkCursor dropdown-item" >Another action</span>
                                            <div className="dropdown-divider"></div>
                                            <span className="linkCursor dropdown-item" >Something else here</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="card-body">
                                    <div className="chart-area">
                                        <canvas id="myAreaChart"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="col-xl-4 col-lg-5">
                            <div className="card shadow mb-4">
                                
                                <div
                                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                    <div className="dropdown no-arrow">
                                        <span className="linkCursor dropdown-toggle"  role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div className="dropdown-header">Dropdown Header:</div>
                                            <span className="linkCursor dropdown-item" >Action</span>
                                            <span className="linkCursor dropdown-item" >Another action</span>
                                            <div className="dropdown-divider"></div>
                                            <span className="linkCursor dropdown-item" >Something else here</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="card-body">
                                    <div className="chart-pie pt-4 pb-2">
                                        <canvas id="myPieChart"></canvas>
                                    </div>
                                    <div className="mt-4 text-center small">
                                        <span className="mr-2">
                                            <i className="fas fa-circle text-primary"></i> Direct
                                        </span>
                                        <span className="mr-2">
                                            <i className="fas fa-circle text-success"></i> Social
                                        </span>
                                        <span className="mr-2">
                                            <i className="fas fa-circle text-info"></i> Referral
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="row">                        
                        <div className="col-lg-6 mb-4">                            
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                                </div>
                                <div className="card-body">
                                  {
                                    projectsData.map((obj) => {
                                      return <ProgressBar data = {obj}></ProgressBar>
                                    })
                                  }                                    
                                </div>
                            </div>

                            <div className="row">
                                {
                                  colorsData.map((obj) => {
                                    return <ColorBlocks data = {obj}></ColorBlocks>
                                  })
                                }
                            </div>

                        </div>

                        <div className="col-lg-6 mb-4">

                            
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
                                </div>
                                <div className="card-body">
                                    <div className="text-center">
                                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}}
                                            src="img/undraw_posting_photo.svg" alt="..."/>
                                    </div>
                                    <p>Add some quality, svg illustrations to your project courtesy of <a
                                            target="_blank" rel="nofollow noreferrer" href="https://undraw.co/">unDraw</a>, a
                                        constantly updated collection of beautiful svg images that you can use
                                        completely free and without attribution!</p>
                                    <a target="_blank" rel="nofollow noreferrer" href="https://undraw.co/">Browse Illustrations on
                                        unDraw &rarr;</a>
                                </div>
                            </div>

                            
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
                                </div>
                                <div className="card-body">
                                    <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce
                                        CSS bloat and poor page performance. Custom CSS classes are used to create
                                        custom components and custom utility classes.</p>
                                    <p className="mb-0">Before working with this theme, you should become familiar with the
                                        Bootstrap framework, especially the utility classes.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                

            </div>
            

            
            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2021</span>
                    </div>
                </div>
            </footer>
            

        </div>
        

    </div>
  );
}

export default App;
