import styled from "styled-components"

const HeaderContainer = styled.header`
   padding: 60px 0;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-image: radial-gradient(circle, #a964ee, #2a0770);
`

const Navigation = styled.nav`
    display: flex;
    align-items: center;
    & ul {
        list-style: none;
        display: flex;
    }
`
const NavLink = styled.li`
    margin: 0 15px;
    & a{
        color: white;
        text-decoration: none;
        font-size: 22px;
    }
`

const InputSearch = styled.input`
    padding: 8px 12px;
    border-radius: 10px;
    border: none;
    font-size: 22px;
    margin: 0 50px;
`

const Header = ({ search, handleSearchProduct }) => {

    return (

        <HeaderContainer>
            <Navigation>
                <ul >
                    <NavLink ><a href="/" >Home</a></NavLink>
                    <NavLink ><a href="#" >New In</a></NavLink>
                    <NavLink ><a href="#" >Sale</a></NavLink>
                    <NavLink ><a href="#" >Contact</a></NavLink>
                </ul>
            </Navigation>
            <InputSearch
                    type="text"
                    placeholder="What are you looking for?"
                    value={search}
                    onChange={handleSearchProduct} />
        </HeaderContainer>

    )
}

export default Header