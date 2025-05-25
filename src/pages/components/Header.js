import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getTotalCartItem } from '../../helpers/Helper';
import Image from 'next/image';
import { useRouter } from 'next/router';
// import { useCart } from '../../context/CartContext';

export default function Header() {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();
    // Use the cart context instead of local state
    const [totalCartItems, setTotalCartItems] = useState(0);
    const [cartUpdated, setCartUpdated] = useState(false);

    useEffect(() => {
        console.log('cart number: ', getTotalCartItem());

        const interval = setInterval(() => {
            const updatedCartItems = getTotalCartItem();
            if (updatedCartItems !== totalCartItems) {
                setTotalCartItems(updatedCartItems);
                setCartUpdated(true);
                // Reset update animation after 2 seconds
                setTimeout(() => {
                    setCartUpdated(false);
                }, 2000);
            }
        }, 2000); // Check every 5 seconds
        return () => clearInterval(interval);
    }, [totalCartItems]);

    const handleSearchSubmit = () => {
        // e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            // Check if we're in a browser environment before accessing DOM
            if (typeof window !== 'undefined' && typeof bootstrap !== 'undefined') {
                const modal = document.getElementById('exampleModal1');
                if (modal) {
                    const bootstrapModal = bootstrap.Modal.getInstance(modal);
                    if (bootstrapModal) bootstrapModal.hide();
                }
            }
        }
    };

    return (
        <>
            <header>
                 <div  className="top-bar">
            <div  className="container">
                <div  className="d-flex align-items-center justify-content-between">
                    <div  className="left">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                color="#000000" fill="none">
                                <path
                                    d="M17 10.8045C17 10.4588 17 10.286 17.052 10.132C17.2032 9.68444 17.6018 9.51076 18.0011 9.32888C18.45 9.12442 18.6744 9.02219 18.8968 9.0042C19.1493 8.98378 19.4022 9.03818 19.618 9.15929C19.9041 9.31984 20.1036 9.62493 20.3079 9.87302C21.2513 11.0188 21.7229 11.5918 21.8955 12.2236C22.0348 12.7334 22.0348 13.2666 21.8955 13.7764C21.6438 14.6979 20.8485 15.4704 20.2598 16.1854C19.9587 16.5511 19.8081 16.734 19.618 16.8407C19.4022 16.9618 19.1493 17.0162 18.8968 16.9958C18.6744 16.9778 18.45 16.8756 18.0011 16.6711C17.6018 16.4892 17.2032 16.3156 17.052 15.868C17 15.714 17 15.5412 17 15.1955V10.8045Z"
                                    stroke="currentColor" stroke-width="1.5" />
                                <path
                                    d="M7 10.8046C7 10.3694 6.98778 9.97821 6.63591 9.6722C6.50793 9.5609 6.33825 9.48361 5.99891 9.32905C5.55001 9.12458 5.32556 9.02235 5.10316 9.00436C4.43591 8.9504 4.07692 9.40581 3.69213 9.87318C2.74875 11.019 2.27706 11.5919 2.10446 12.2237C1.96518 12.7336 1.96518 13.2668 2.10446 13.7766C2.3562 14.6981 3.15152 15.4705 3.74021 16.1856C4.11129 16.6363 4.46577 17.0475 5.10316 16.996C5.32556 16.978 5.55001 16.8757 5.99891 16.6713C6.33825 16.5167 6.50793 16.4394 6.63591 16.3281C6.98778 16.0221 7 15.631 7 15.1957V10.8046Z"
                                    stroke="currentColor" stroke-width="1.5" />
                                <path d="M5 9C5 5.68629 8.13401 3 12 3C15.866 3 19 5.68629 19 9" stroke="currentColor"
                                    stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round" />
                                <path d="M19 17V17.8C19 19.5673 17.2091 21 15 21H13" stroke="currentColor"
                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Support Center: <Link href="tel:9019391045">+91 9019391045</Link>
                        </span>
                    </div>
                    <div  className="right">
                        <div  className="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <div  className="btn-group" role="group">
                                <button type="button"  className="btn dropdown-toggle text-white rounded-2"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Appoinment
                                </button>
                                <ul  className="dropdown-menu">
                                    <li><a  className="dropdown-item" href="#">Dropdown link</a></li>
                                    <li><a  className="dropdown-item" href="#">Dropdown link</a></li>
                                </ul>
                            </div>
                            <div  className="btn-group" role="group">
                                <button type="button"  className="btn dropdown-toggle text-white rounded-2"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    English
                                </button>
                                <ul  className="dropdown-menu">
                                    <li><a  className="dropdown-item" href="#">Dropdown link</a></li>
                                    <li><a  className="dropdown-item" href="#">Dropdown link</a></li>
                                </ul>
                            </div>
                            <div  className="btn-group" role="group">
                                <button type="button"  className="btn dropdown-toggle text-white rounded-2"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    INR
                                </button>
                                <ul  className="dropdown-menu">
                                    <li><a  className="dropdown-item" href="#">Dropdown link</a></li>
                                    <li><a  className="dropdown-item" href="#">Dropdown link</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                {/* Topbar end */}
                
                  <nav  className="navbar navbar-expand-lg" id="navbar_top">
            <div  className="container">
                <Link  className="navbar-brand"  href="/">
                
                <img src="/assets/images/logo.png" alt="HomeyBites"/>
                  {/* <img src="/assets/images/logo.png" alt="byrappa" width={150} height={50} /> */}
                
                
                </Link>
                <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation"> <span
                         className="navbar-toggler-icon"></span></button>

                <div  className="collapse navbar-collapse" id="navbarScroll">
                    <ul  className="navbar-nav mx-auto">
                        <li  className="nav-item dropdown has-megamenu position-relative">
                            <Link  className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">New arrival</Link>
                            <div  className="dropdown-menu megamenu border-0 rounded-4" role="menu">
                                <div  className="row">
                                    <div  className="col-lg-3">
                                        <h4  className="badge rounded-pill">Silk Collections</h4>
                                        <ul>
                                            <li  className="nav-item">
                                                <Link  className="nav-link" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        width="24" height="24" color="#000000" fill="none">
                                                        <path
                                                            d="M20.5 16.9286V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2H11.5C7.72876 2 5.84315 2 4.67157 3.17157C3.5 4.34315 3.5 6.22876 3.5 10V19.5"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" />
                                                        <path
                                                            d="M20.5 17H6C4.61929 17 3.5 18.1193 3.5 19.5C3.5 20.8807 4.61929 22 6 22H20.5"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" />
                                                        <path
                                                            d="M20.5 22C19.1193 22 18 20.8807 18 19.5C18 18.1193 19.1193 17 20.5 17"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" />
                                                        <path
                                                            d="M12.3077 12L10.847 7.47891C10.7552 7.19466 10.4734 7 10.1538 7C9.83425 7 9.55249 7.19466 9.46066 7.47891L8 12M15 7V12M8.53846 10.5H11.7692"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    Kanchipuram silk sarees
                                                </Link>
                                            </li>
                                            <li  className="nav-item">
                                                <Link  className="nav-link" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        width="24" height="24" color="#000000" fill="none">
                                                        <path
                                                            d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linejoin="round" />
                                                        <path
                                                            d="M6 8C6 7.05719 6 6.58579 6.29289 6.29289C6.58579 6 7.05719 6 8 6H8.5C9.44281 6 9.91421 6 10.2071 6.29289C10.5 6.58579 10.5 7.05719 10.5 8V15C10.5 15.9428 10.5 16.4142 10.2071 16.7071C9.91421 17 9.44281 17 8.5 17H8C7.05719 17 6.58579 17 6.29289 16.7071C6 16.4142 6 15.9428 6 15V8Z"
                                                            stroke="currentColor" stroke-width="1.5" />
                                                        <path
                                                            d="M13.5 8C13.5 7.05719 13.5 6.58579 13.7929 6.29289C14.0858 6 14.5572 6 15.5 6H16C16.9428 6 17.4142 6 17.7071 6.29289C18 6.58579 18 7.05719 18 8V10C18 10.9428 18 11.4142 17.7071 11.7071C17.4142 12 16.9428 12 16 12H15.5C14.5572 12 14.0858 12 13.7929 11.7071C13.5 11.4142 13.5 10.9428 13.5 10V8Z"
                                                            stroke="currentColor" stroke-width="1.5" />
                                                    </svg>
                                                    Banarasi silk sarees
                                                </Link>
                                            </li>
                                            <li  className="nav-item">
                                                <Link  className="nav-link" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        width="24" height="24" color="#000000" fill="none">
                                                        <path
                                                            d="M12 20.5C13.8097 20.5 15.5451 20.3212 17.1534 19.9934C19.1623 19.5839 20.1668 19.3791 21.0834 18.2006C22 17.0221 22 15.6693 22 12.9635V11.0365C22 8.33073 22 6.97787 21.0834 5.79937C20.1668 4.62088 19.1623 4.41613 17.1534 4.00662C15.5451 3.67877 13.8097 3.5 12 3.5C10.1903 3.5 8.45489 3.67877 6.84656 4.00662C4.83766 4.41613 3.83321 4.62088 2.9166 5.79937C2 6.97787 2 8.33073 2 11.0365V12.9635C2 15.6693 2 17.0221 2.9166 18.2006C3.83321 19.3791 4.83766 19.5839 6.84656 19.9934C8.45489 20.3212 10.1903 20.5 12 20.5Z"
                                                            stroke="currentColor" stroke-width="1.5" />
                                                        <path
                                                            d="M15.9621 12.3129C15.8137 12.9187 15.0241 13.3538 13.4449 14.2241C11.7272 15.1705 10.8684 15.6438 10.1728 15.4615C9.9372 15.3997 9.7202 15.2911 9.53799 15.1438C9 14.7089 9 13.8059 9 12C9 10.1941 9 9.29112 9.53799 8.85618C9.7202 8.70886 9.9372 8.60029 10.1728 8.53854C10.8684 8.35621 11.7272 8.82945 13.4449 9.77593C15.0241 10.6462 15.8137 11.0813 15.9621 11.6871C16.0126 11.8933 16.0126 12.1067 15.9621 12.3129Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linejoin="round" />
                                                    </svg>
                                                    Kanjeevaram silk sarees
                                                </Link>
                                            </li>
                                            <li  className="nav-item">
                                                <Link  className="nav-link" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        width="24" height="24" color="#000000" fill="none">
                                                        <path
                                                            d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                                                            stroke="currentColor" stroke-width="1.5" />
                                                        <path d="M2.5 9H21.5" stroke="currentColor" stroke-width="1.5"
                                                            stroke-linejoin="round" />
                                                        <path d="M13 13L17 13" stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M13 17H15" stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M6.99981 6H7.00879" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                        <path d="M10.9998 6H11.0088" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                        <path d="M9 9V21.5" stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    Mysore silk sarees
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div  className="col-lg-3">
                                        <h4  className="badge rounded-pill">Gadwal Collections</h4>
                                        <ul>
                                            <li  className="nav-item">
                                                <Link  className="nav-link" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        width="24" height="24" color="#000000" fill="none">
                                                        <path
                                                            d="M20.5 16.9286V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2H11.5C7.72876 2 5.84315 2 4.67157 3.17157C3.5 4.34315 3.5 6.22876 3.5 10V19.5"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" />
                                                        <path
                                                            d="M20.5 17H6C4.61929 17 3.5 18.1193 3.5 19.5C3.5 20.8807 4.61929 22 6 22H20.5"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" />
                                                        <path
                                                            d="M20.5 22C19.1193 22 18 20.8807 18 19.5C18 18.1193 19.1193 17 20.5 17"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" />
                                                        <path
                                                            d="M12.3077 12L10.847 7.47891C10.7552 7.19466 10.4734 7 10.1538 7C9.83425 7 9.55249 7.19466 9.46066 7.47891L8 12M15 7V12M8.53846 10.5H11.7692"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    Kanchipuram silk sarees
                                                </Link>
                                            </li>
                                            <li  className="nav-item">
                                                <Link  className="nav-link" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        width="24" height="24" color="#000000" fill="none">
                                                        <path
                                                            d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linejoin="round" />
                                                        <path
                                                            d="M6 8C6 7.05719 6 6.58579 6.29289 6.29289C6.58579 6 7.05719 6 8 6H8.5C9.44281 6 9.91421 6 10.2071 6.29289C10.5 6.58579 10.5 7.05719 10.5 8V15C10.5 15.9428 10.5 16.4142 10.2071 16.7071C9.91421 17 9.44281 17 8.5 17H8C7.05719 17 6.58579 17 6.29289 16.7071C6 16.4142 6 15.9428 6 15V8Z"
                                                            stroke="currentColor" stroke-width="1.5" />
                                                        <path
                                                            d="M13.5 8C13.5 7.05719 13.5 6.58579 13.7929 6.29289C14.0858 6 14.5572 6 15.5 6H16C16.9428 6 17.4142 6 17.7071 6.29289C18 6.58579 18 7.05719 18 8V10C18 10.9428 18 11.4142 17.7071 11.7071C17.4142 12 16.9428 12 16 12H15.5C14.5572 12 14.0858 12 13.7929 11.7071C13.5 11.4142 13.5 10.9428 13.5 10V8Z"
                                                            stroke="currentColor" stroke-width="1.5" />
                                                    </svg>
                                                    Banarasi silk sarees
                                                </Link>
                                            </li>
                                            <li  className="nav-item">
                                                <Link  className="nav-link" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        width="24" height="24" color="#000000" fill="none">
                                                        <path
                                                            d="M12 20.5C13.8097 20.5 15.5451 20.3212 17.1534 19.9934C19.1623 19.5839 20.1668 19.3791 21.0834 18.2006C22 17.0221 22 15.6693 22 12.9635V11.0365C22 8.33073 22 6.97787 21.0834 5.79937C20.1668 4.62088 19.1623 4.41613 17.1534 4.00662C15.5451 3.67877 13.8097 3.5 12 3.5C10.1903 3.5 8.45489 3.67877 6.84656 4.00662C4.83766 4.41613 3.83321 4.62088 2.9166 5.79937C2 6.97787 2 8.33073 2 11.0365V12.9635C2 15.6693 2 17.0221 2.9166 18.2006C3.83321 19.3791 4.83766 19.5839 6.84656 19.9934C8.45489 20.3212 10.1903 20.5 12 20.5Z"
                                                            stroke="currentColor" stroke-width="1.5" />
                                                        <path
                                                            d="M15.9621 12.3129C15.8137 12.9187 15.0241 13.3538 13.4449 14.2241C11.7272 15.1705 10.8684 15.6438 10.1728 15.4615C9.9372 15.3997 9.7202 15.2911 9.53799 15.1438C9 14.7089 9 13.8059 9 12C9 10.1941 9 9.29112 9.53799 8.85618C9.7202 8.70886 9.9372 8.60029 10.1728 8.53854C10.8684 8.35621 11.7272 8.82945 13.4449 9.77593C15.0241 10.6462 15.8137 11.0813 15.9621 11.6871C16.0126 11.8933 16.0126 12.1067 15.9621 12.3129Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linejoin="round" />
                                                    </svg>
                                                    Kanjeevaram silk sarees
                                                </Link>
                                            </li>
                                            <li  className="nav-item">
                                                <Link  className="nav-link" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        width="24" height="24" color="#000000" fill="none">
                                                        <path
                                                            d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                                                            stroke="currentColor" stroke-width="1.5" />
                                                        <path d="M2.5 9H21.5" stroke="currentColor" stroke-width="1.5"
                                                            stroke-linejoin="round" />
                                                        <path d="M13 13L17 13" stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M13 17H15" stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M6.99981 6H7.00879" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                        <path d="M10.9998 6H11.0088" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                        <path d="M9 9V21.5" stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    Mysore silk sarees
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div  className="col-lg-3">
                                        <h4  className="badge rounded-pill">Banarasi Collections</h4>
                                        <ul>
                                            <li  className="nav-item">
                                                <Link  className="nav-link" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        width="24" height="24" color="#000000" fill="none">
                                                        <path
                                                            d="M20.5 16.9286V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2H11.5C7.72876 2 5.84315 2 4.67157 3.17157C3.5 4.34315 3.5 6.22876 3.5 10V19.5"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" />
                                                        <path
                                                            d="M20.5 17H6C4.61929 17 3.5 18.1193 3.5 19.5C3.5 20.8807 4.61929 22 6 22H20.5"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" />
                                                        <path
                                                            d="M20.5 22C19.1193 22 18 20.8807 18 19.5C18 18.1193 19.1193 17 20.5 17"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" />
                                                        <path
                                                            d="M12.3077 12L10.847 7.47891C10.7552 7.19466 10.4734 7 10.1538 7C9.83425 7 9.55249 7.19466 9.46066 7.47891L8 12M15 7V12M8.53846 10.5H11.7692"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    Kanchipuram silk sarees
                                                </Link>
                                            </li>
                                            <li  className="nav-item">
                                                <Link  className="nav-link" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        width="24" height="24" color="#000000" fill="none">
                                                        <path
                                                            d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linejoin="round" />
                                                        <path
                                                            d="M6 8C6 7.05719 6 6.58579 6.29289 6.29289C6.58579 6 7.05719 6 8 6H8.5C9.44281 6 9.91421 6 10.2071 6.29289C10.5 6.58579 10.5 7.05719 10.5 8V15C10.5 15.9428 10.5 16.4142 10.2071 16.7071C9.91421 17 9.44281 17 8.5 17H8C7.05719 17 6.58579 17 6.29289 16.7071C6 16.4142 6 15.9428 6 15V8Z"
                                                            stroke="currentColor" stroke-width="1.5" />
                                                        <path
                                                            d="M13.5 8C13.5 7.05719 13.5 6.58579 13.7929 6.29289C14.0858 6 14.5572 6 15.5 6H16C16.9428 6 17.4142 6 17.7071 6.29289C18 6.58579 18 7.05719 18 8V10C18 10.9428 18 11.4142 17.7071 11.7071C17.4142 12 16.9428 12 16 12H15.5C14.5572 12 14.0858 12 13.7929 11.7071C13.5 11.4142 13.5 10.9428 13.5 10V8Z"
                                                            stroke="currentColor" stroke-width="1.5" />
                                                    </svg>
                                                    Banarasi silk sarees
                                                </Link>
                                            </li>
                                            <li  className="nav-item">
                                                <Link  className="nav-link" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        width="24" height="24" color="#000000" fill="none">
                                                        <path
                                                            d="M12 20.5C13.8097 20.5 15.5451 20.3212 17.1534 19.9934C19.1623 19.5839 20.1668 19.3791 21.0834 18.2006C22 17.0221 22 15.6693 22 12.9635V11.0365C22 8.33073 22 6.97787 21.0834 5.79937C20.1668 4.62088 19.1623 4.41613 17.1534 4.00662C15.5451 3.67877 13.8097 3.5 12 3.5C10.1903 3.5 8.45489 3.67877 6.84656 4.00662C4.83766 4.41613 3.83321 4.62088 2.9166 5.79937C2 6.97787 2 8.33073 2 11.0365V12.9635C2 15.6693 2 17.0221 2.9166 18.2006C3.83321 19.3791 4.83766 19.5839 6.84656 19.9934C8.45489 20.3212 10.1903 20.5 12 20.5Z"
                                                            stroke="currentColor" stroke-width="1.5" />
                                                        <path
                                                            d="M15.9621 12.3129C15.8137 12.9187 15.0241 13.3538 13.4449 14.2241C11.7272 15.1705 10.8684 15.6438 10.1728 15.4615C9.9372 15.3997 9.7202 15.2911 9.53799 15.1438C9 14.7089 9 13.8059 9 12C9 10.1941 9 9.29112 9.53799 8.85618C9.7202 8.70886 9.9372 8.60029 10.1728 8.53854C10.8684 8.35621 11.7272 8.82945 13.4449 9.77593C15.0241 10.6462 15.8137 11.0813 15.9621 11.6871C16.0126 11.8933 16.0126 12.1067 15.9621 12.3129Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linejoin="round" />
                                                    </svg>
                                                    Kanjeevaram silk sarees
                                                </Link>
                                            </li>
                                            <li  className="nav-item">
                                                <Link  className="nav-link" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        width="24" height="24" color="#000000" fill="none">
                                                        <path
                                                            d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                                                            stroke="currentColor" stroke-width="1.5" />
                                                        <path d="M2.5 9H21.5" stroke="currentColor" stroke-width="1.5"
                                                            stroke-linejoin="round" />
                                                        <path d="M13 13L17 13" stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M13 17H15" stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M6.99981 6H7.00879" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                        <path d="M10.9998 6H11.0088" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                        <path d="M9 9V21.5" stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    Mysore silk sarees
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div  className="col-lg-3">
                                        <h4  className="badge rounded-pill">Trend Collections</h4>
                                        <ul>
                                            <li  className="nav-item">
                                                <Link  className="nav-link" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        width="24" height="24" color="#000000" fill="none">
                                                        <path
                                                            d="M20.5 16.9286V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2H11.5C7.72876 2 5.84315 2 4.67157 3.17157C3.5 4.34315 3.5 6.22876 3.5 10V19.5"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" />
                                                        <path
                                                            d="M20.5 17H6C4.61929 17 3.5 18.1193 3.5 19.5C3.5 20.8807 4.61929 22 6 22H20.5"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" />
                                                        <path
                                                            d="M20.5 22C19.1193 22 18 20.8807 18 19.5C18 18.1193 19.1193 17 20.5 17"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" />
                                                        <path
                                                            d="M12.3077 12L10.847 7.47891C10.7552 7.19466 10.4734 7 10.1538 7C9.83425 7 9.55249 7.19466 9.46066 7.47891L8 12M15 7V12M8.53846 10.5H11.7692"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    Kanchipuram silk sarees
                                                </Link>
                                            </li>
                                            <li  className="nav-item">
                                                <Link  className="nav-link" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        width="24" height="24" color="#000000" fill="none">
                                                        <path
                                                            d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linejoin="round" />
                                                        <path
                                                            d="M6 8C6 7.05719 6 6.58579 6.29289 6.29289C6.58579 6 7.05719 6 8 6H8.5C9.44281 6 9.91421 6 10.2071 6.29289C10.5 6.58579 10.5 7.05719 10.5 8V15C10.5 15.9428 10.5 16.4142 10.2071 16.7071C9.91421 17 9.44281 17 8.5 17H8C7.05719 17 6.58579 17 6.29289 16.7071C6 16.4142 6 15.9428 6 15V8Z"
                                                            stroke="currentColor" stroke-width="1.5" />
                                                        <path
                                                            d="M13.5 8C13.5 7.05719 13.5 6.58579 13.7929 6.29289C14.0858 6 14.5572 6 15.5 6H16C16.9428 6 17.4142 6 17.7071 6.29289C18 6.58579 18 7.05719 18 8V10C18 10.9428 18 11.4142 17.7071 11.7071C17.4142 12 16.9428 12 16 12H15.5C14.5572 12 14.0858 12 13.7929 11.7071C13.5 11.4142 13.5 10.9428 13.5 10V8Z"
                                                            stroke="currentColor" stroke-width="1.5" />
                                                    </svg>
                                                    Banarasi silk sarees
                                                </Link>
                                            </li>
                                            <li  className="nav-item">
                                                <Link  className="nav-link" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        width="24" height="24" color="#000000" fill="none">
                                                        <path
                                                            d="M12 20.5C13.8097 20.5 15.5451 20.3212 17.1534 19.9934C19.1623 19.5839 20.1668 19.3791 21.0834 18.2006C22 17.0221 22 15.6693 22 12.9635V11.0365C22 8.33073 22 6.97787 21.0834 5.79937C20.1668 4.62088 19.1623 4.41613 17.1534 4.00662C15.5451 3.67877 13.8097 3.5 12 3.5C10.1903 3.5 8.45489 3.67877 6.84656 4.00662C4.83766 4.41613 3.83321 4.62088 2.9166 5.79937C2 6.97787 2 8.33073 2 11.0365V12.9635C2 15.6693 2 17.0221 2.9166 18.2006C3.83321 19.3791 4.83766 19.5839 6.84656 19.9934C8.45489 20.3212 10.1903 20.5 12 20.5Z"
                                                            stroke="currentColor" stroke-width="1.5" />
                                                        <path
                                                            d="M15.9621 12.3129C15.8137 12.9187 15.0241 13.3538 13.4449 14.2241C11.7272 15.1705 10.8684 15.6438 10.1728 15.4615C9.9372 15.3997 9.7202 15.2911 9.53799 15.1438C9 14.7089 9 13.8059 9 12C9 10.1941 9 9.29112 9.53799 8.85618C9.7202 8.70886 9.9372 8.60029 10.1728 8.53854C10.8684 8.35621 11.7272 8.82945 13.4449 9.77593C15.0241 10.6462 15.8137 11.0813 15.9621 11.6871C16.0126 11.8933 16.0126 12.1067 15.9621 12.3129Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linejoin="round" />
                                                    </svg>
                                                    Kanjeevaram silk sarees
                                                </Link>
                                            </li>
                                            <li  className="nav-item">
                                                <Link  className="nav-link" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        width="24" height="24" color="#000000" fill="none">
                                                        <path
                                                            d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                                                            stroke="currentColor" stroke-width="1.5" />
                                                        <path d="M2.5 9H21.5" stroke="currentColor" stroke-width="1.5"
                                                            stroke-linejoin="round" />
                                                        <path d="M13 13L17 13" stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M13 17H15" stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M6.99981 6H7.00879" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                        <path d="M10.9998 6H11.0088" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                        <path d="M9 9V21.5" stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    Mysore silk sarees
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li  className="nav-item"><Link  className="nav-link" href="#">Pure Handloom Silk</Link></li>
                        <li  className="nav-item"><Link  className="nav-link" href="#">Kanjivaram</Link></li>
                        <li  className="nav-item"><Link  className="nav-link" href="#">Banarsi</Link></li>
                        <li  className="nav-item"><Link  className="nav-link" href="#">Trends</Link></li>
                    </ul>
                </div>
                <div  className="icon-menu">
                        <ul  className="d-flex align-items-center gap-3">
                            <li>
                                <div  className="input-group search">
                                    <input type="text"  className="form-control" placeholder="What you are looking for?"
                                        aria-describedby="button-addon2"/>
                                    <button
                                         className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
                                        type="button" id="button-addon2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20"
                                            height="20" color="#000000" fill="none">
                                            <path d="M17.5 17.5L22 22" stroke="currentColor" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                                                stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </li>
                            <li>
                                <Link  href="/auth/login">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                        color="#000000" fill="none">
                                        <path
                                            d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
                                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
                                            stroke="currentColor" stroke-width="1.5" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                        color="#000000" fill="none">
                                        <path
                                            d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
                                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="/checkout"  className="position-relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                        color="#000000" fill="none">
                                        <path
                                            d="M3.87289 17.0194L2.66933 9.83981C2.48735 8.75428 2.39637 8.21152 2.68773 7.85576C2.9791 7.5 3.51461 7.5 4.58564 7.5H19.4144C20.4854 7.5 21.0209 7.5 21.3123 7.85576C21.6036 8.21152 21.5126 8.75428 21.3307 9.83981L20.1271 17.0194C19.7282 19.3991 19.5287 20.5889 18.7143 21.2945C17.9 22 16.726 22 14.3782 22H9.62182C7.27396 22 6.10003 22 5.28565 21.2945C4.47127 20.5889 4.27181 19.3991 3.87289 17.0194Z"
                                            stroke="currentColor" stroke-width="1.5" />
                                        <path d="M17.5 7.5C17.5 4.46243 15.0376 2 12 2C8.96243 2 6.5 4.46243 6.5 7.5"
                                            stroke="currentColor" stroke-width="1.5" />
                                    </svg>
                                    <span
                                         className="badge position-absolute translate-middle badge rounded-pill bg-danger">{totalCartItems}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
            </header>

        </>
    );
}