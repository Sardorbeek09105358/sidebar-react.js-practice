import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./sidebar.css"

const Sidebar = () => {
    const [lists, setLists] = useState([
        { id: 1, title: "Users", path: "/" },
        { id: 2, title: "todos", path: "/todos" },
        { id: 3, title: "photos", path: "/photos" }
    ])

    const [active, setActive] = useState(1)

    const activeTab = (id) => {
        setActive(id)
        localStorage.setItem('id', id)
    }
    useEffect(() => {
        let val = +localStorage.getItem("id") // localStoragedan string qaytadi shunin uchun + qo'ydim
        if (val) {
            setActive(val)
        } else {
            setActive(1)
        }
    }, [])
    return (
        <div className='side'>
            <div className='sidebar'>
                <ul>
                    {
                        lists.map((item, index) => {
                            return <li key={index}>
                                <NavLink className={active == item.id ? "active_btn" : 'button'} onClick={() => activeTab(item.id)} to={item.path}>{item.title}</NavLink>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Sidebar

