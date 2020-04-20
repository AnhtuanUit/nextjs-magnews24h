import Link from "next/link";
import { withRouter } from 'next/router';
import categories from "../constants/categories";

function Header({router}) {
  const asPath = router.query.category;
  const pageNumber = asPath && asPath.match(/([-a-z]*)-p(\d*)/) && asPath.match(/([-a-z]*)-p(\d*)/)[2];
  const categoryPath = pageNumber ? asPath.match(/([-a-z]*)-p(\d*)/)[1] : asPath;
    return (
        <header id="header">
          <div id="center-header">
            <div className="container">
              <div className="header-logo">
                <Link href="/" >
                  <a className="logo"><img src="./img/logo.png" alt="" /></a>
                </Link>
              </div>
              <div className="header-ads">
                <img className="center-block" src="./img/ad-2.jpg" alt="" /> 
              </div>
            </div>
          </div>
          <div id="nav-header">
            <div className="container">
              <nav id="main-nav">
                <div className="nav-logo">
                  <Link href="/" >
                    <a className="logo"><img src="./img/logo-alt.png" alt="" /></a>
                  </Link>
                </div>
                <ul className="main-nav nav navbar-nav">
                  <li className={categories.filter(category => category.type.includes(categoryPath)).length ? "" : "active"}><Link  href="/"><a>Trang nhất</a></Link></li>
                  {categories.map(category => <li key={category.type} className={category.type.includes(categoryPath) ? "active" : ""}><Link  href="/[category]" as={category.type}><a>{category.name}</a></Link></li>)}
                </ul>
              </nav>
              <div className="button-nav">
                {/* <button className="search-collapse-btn"><i className="fa fa-search" /></button> */}
                <button className="nav-collapse-btn"><i className="fa fa-bars" /></button>
                <div className="search-form">
                  <form>
                    <input className="input" type="text" name="search" placeholder="Search" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </header>
      );
}

export default withRouter(Header);
