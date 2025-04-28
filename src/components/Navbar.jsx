// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <AppBar position="static" color="transparent" elevation={0}>
//       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//         {/* Logo / Your Name */}
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
//           Bhagwat Sadashiv Munde
//         </Typography>

//         {/* Menu Links */}
//         <div>
//           <Button color="inherit" component={Link} to="/">Home</Button>
//           <Button color="inherit" component={Link} to="/about">About</Button>
//           <Button color="inherit" component={Link} to="/projects">Projects</Button>
//           <Button color="inherit" component={Link} to="/contact">Contact</Button>
//         </div>

//         {/* Mobile Menu Icon (we'll enhance later) */}
//         <IconButton color="inherit" sx={{ display: { xs: 'block', md: 'none' } }}>
//           <MenuIcon />
//         </IconButton>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Slide,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';

// Custom styled components
const NavLink = styled(Button)(({ theme, active }) => ({
  margin: theme.spacing(0, 1),
  fontWeight: 500,
  position: 'relative',
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    width: active ? '100%' : '0%',
    height: '2px',
    bottom: '0',
    left: '0',
    backgroundColor: theme.palette.primary.main,
    transition: 'width 0.3s ease-in-out',
  },
  '&:hover::after': {
    width: '100%',
  },
  textTransform: 'none',
  fontSize: '1rem',
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  letterSpacing: '0.5px',
}));

// Hide AppBar on scroll down
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Check if we've scrolled to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box sx={{ 
      width: 250, 
      height: '100%',
      background: theme.palette.background.default
    }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        p: 2,
        borderBottom: `1px solid ${theme.palette.divider}`
      }}>
        <LogoText variant="h6">BSM</LogoText>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem 
            button 
            key={item.name} 
            component={Link} 
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{ 
              borderLeft: location.pathname === item.path ? `4px solid ${theme.palette.primary.main}` : '4px solid transparent',
              backgroundColor: location.pathname === item.path ? theme.palette.action.selected : 'transparent',
              transition: 'all 0.3s',
              my: 1,
              mx: 2,
              borderRadius: 1
            }}
          >
            <ListItemText 
              primary={item.name} 
              primaryTypographyProps={{ 
                fontWeight: location.pathname === item.path ? 600 : 400,
                color: location.pathname === item.path ? theme.palette.primary.main : theme.palette.text.primary
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          sx={{
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
            boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.05)' : 'none',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            transition: 'all 0.3s ease',
            color: theme.palette.text.primary
          }}
        >
          <Toolbar sx={{ py: 1 }}>
            {/* Logo / Your Name */}
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <LogoText variant="h6" component={Link} to="/" sx={{ textDecoration: 'none' }}>
                Bhagwat Sadashiv Munde
              </LogoText>
            </Box>

            {/* Desktop Menu Links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navItems.map((item) => (
                <NavLink 
                  key={item.name}
                  color="inherit" 
                  component={Link} 
                  to={item.path}
                  active={location.pathname === item.path ? 1 : 0}
                >
                  {item.name}
                </NavLink>
              ))}
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton 
              color="inherit" 
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      
      {/* Mobile Menu Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>
      
      {/* Toolbar placeholder to prevent content from going under AppBar */}
      <Toolbar />
    </>
  );
};

export default Navbar;