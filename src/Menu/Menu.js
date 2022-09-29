import { Link } from "react-router-dom";

export function Menu(){

    return(
        <>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark ">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link class="navbar-brand" to="/">home</Link>
        </li>
        <li class="nav-item">
        <Link class="navbar-brand" to="/integrantes">integrantes</Link>
        </li>
        <li class="nav-item">
        <Link class="navbar-brand" to="/historia">historia</Link>
        </li>
        <li class="nav-item">
        <Link class="navbar-brand" to="/albumes">albumes</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>       
        </>
    );

}