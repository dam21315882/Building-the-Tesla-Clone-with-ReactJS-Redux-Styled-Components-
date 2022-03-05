import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useSelector} from 'react-redux';
import {selectCars} from '../features/car/carSlice'
function Header() {

    const [isShowNav, setIsShowNav] = useState(false);
    const cars = useSelector(selectCars);

    const navToggleHandler = () => {
      setIsShowNav(!isShowNav);
    }

    return (
      <Container>
        <a>
          <img src="images/logo.svg"/>
        </a>
          <Menu>
          { cars && cars.map((car,index) => 
            (
              <a href="#" key={index}>{car}</a>
            ))
          }
        </Menu>
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>
          <CustomMenu onClick={navToggleHandler}/>
        </RightMenu>
        <BurgerNav show={isShowNav}>
          <CloserWrapper onClick={navToggleHandler}>
            <CustomClose/>
          </CloserWrapper>
          { cars && cars.map((car,index) => 
            (
              <li key={index}><a href="#">{car}</a></li>
            ))
          }
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Used Inventory</a></li>
          <li><a href="#">Trade-in</a></li>
          <li><a href="#">Test Drive</a></li>
          <li><a href="#">Powerwall</a></li>
          <li><a href="#">Commercial Energy</a></li>
          <li><a href="#">Utilities</a></li>
          <li><a href="#">Charging</a></li>
          <li><a href="#">Find Us</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">More</a></li>
        </BurgerNav>        
      </Container>
    )
}

export default Header


const Container = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  flex: 1;   //取得Container去掉logo的剩餘空間
  justify-content: center; //在剩餘空間裡水平置中
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 20px;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.5s ease-in-out;
  overflow:scroll;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0, .2);



    a {
      font-weight: 600;
    }
  }
`

const CloserWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`