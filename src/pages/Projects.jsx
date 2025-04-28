import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Chip,
  Container,
  Tabs,
  Tab,
  IconButton,
  useMediaQuery,
  useTheme,
  Tooltip
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import StarIcon from '@mui/icons-material/Star';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Sample web projects data with enhanced details
const projects = [
  {
    id: 1,
    title: "Matrimonial Web App",
    description: "A fully responsive Matrimonial platform with user authentication, search, payment integration.",
    detailedDescription: "This platform features a responsive design that works flawlessly across all devices. Built with React for the frontend and Node.js with Express for the backend, it includes JWT authentication, Redux state management. The database is powered by MongoDB.",
    image: "https://res.cloudinary.com/dbqjo8ncc/image/upload/v1745735542/glmzqykenkee2cgqqjpm.png",
    placeholderImage: "https://res.cloudinary.com/dbqjo8ncc/image/upload/v1745735542/glmzqykenkee2cgqqjpm.png", // Placeholder until real image is set
    githubLink: "https://github.com/Mundebhagwat",
    liveLink: "https://mangalashtak-com.vercel.app/",
    technologies: ["React", "Node.js", "Express", "MongoDB",],
    category: "fullstack",
    featured: true
  },
  {
    id: 2,
    title: "ParkNow Web App",
    description: "Full-stack ParkNow web app with payment integration, user authentication, and admin dashboard. This app provides the solution to the parking problem, user can book the parking simply searching the location.",
    detailedDescription: "Designed for parking, user can park find the parking with one search, live location via browser. user can check the locations and then pay the payment and book the slot according the there time period.",
    image: "https://res.cloudinary.com/dbqjo8ncc/image/upload/v1745729988/pecl50k7qwnw8b3eq2dk.png",
    placeholderImage: "https://res.cloudinary.com/dbqjo8ncc/image/upload/v1745729988/pecl50k7qwnw8b3eq2dk.png",
    githubLink: "https://github.com/Mundebhagwat",
    liveLink: "https://parknow-b4vs.onrender.com/",
    technologies: ["React", "Material-UI", "Node.js", "MongoDB"],
    category: "fullstack",
    featured: true
  },
  {
    id: 3,
    title: "Hotel Management App",
    description: "Featured Hotel Management Web App, provides user's to view and book the hotels room.",
    detailedDescription: "This Hotel management app is build for online booking, this project is from the assignment given by the collage, here user can create there account and then, on the home page see the details about the hotel, they can view and book the room og the hotels.",
    image: "https://res.cloudinary.com/dbqjo8ncc/image/upload/v1745730206/ruiuuva6ebgc8d0bb6gx.png",
    placeholderImage: "https://res.cloudinary.com/dbqjo8ncc/image/upload/v1745730206/ruiuuva6ebgc8d0bb6gx.png",
    githubLink: "https://github.com/Mundebhagwat",
    liveLink: "https://hotel-booking-lgm4.onrender.com/",
    technologies: ["React", "Node.js", "Express"],
    category: "fullstack",
    featured: true
  },
  {
    id: 4,
    title: "Real Time Chat App",
    description: "Real Time Chat App, Users can join room and talk with the friends.",
    detailedDescription: "This app is build for fun, here user's can join the chat rooms and talk with there friends and family. ",
    image: "https://res.cloudinary.com/dbqjo8ncc/image/upload/v1745730688/ermyzid9l1xd0xykh7bi.png",
    placeholderImage: "https://res.cloudinary.com/dbqjo8ncc/image/upload/v1745730688/ermyzid9l1xd0xykh7bi.png",
    githubLink: "https://github.com/Mundebhagwat",
    liveLink: "https://real-time-chat-ewj8.onrender.com/",
    technologies: ["React", "Material-UI", "Framer Motion", "EmailJS", "Responsive Design"],
    category: "frontend",
    featured: false
  }
];

const ProjectsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [category, setCategory] = useState("all");
  const [expanded, setExpanded] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const filterProjects = () => {
    if (category === "featured") {
      return projects.filter(project => project.featured);
    } else if (category === "all") {
      return projects;
    } else {
      return projects.filter(project => project.category === category);
    }
  };

  const handleCategoryChange = (event, newValue) => {
    setCategory(newValue);
    setExpanded(null);
  };

  const toggleExpanded = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Get icon based on category
  const getCategoryIcon = (category) => {
    switch(category) {
      case "frontend":
        return <WebIcon />;
      case "fullstack":
        return <CodeIcon />;
      default:
        return <CodeIcon />;
    }
  };

  return (
    <Box sx={{ 
      py: { xs: 6, md: 10 }, 
      backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#f8f9fa',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background pattern */}
      <Box sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        background: theme.palette.mode === 'dark' 
          ? 'radial-gradient(circle, rgba(25,25,25,1) 0%, rgba(18,18,18,1) 100%)' 
          : 'radial-gradient(circle, rgba(250,250,250,1) 0%, rgba(248,249,250,1) 100%)',
        zIndex: 0,
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: theme.palette.mode === 'dark'
            ? 'radial-gradient(rgba(255,255,255,0.03) 2px, transparent 2px)'
            : 'radial-gradient(rgba(0,0,0,0.03) 2px, transparent 2px)',
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0',
        }
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="overline" 
              component="div" 
              sx={{ 
                color: theme.palette.primary.main, 
                fontWeight: 600, 
                letterSpacing: 2,
                mb: 1 
              }}
            >
              PORTFOLIO SHOWCASE
            </Typography>
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                fontWeight: 700, 
                mb: 2,
                background: theme.palette.mode === 'dark' 
                  ? 'linear-gradient(90deg, #90CAF9 0%, #3F51B5 100%)' 
                  : 'linear-gradient(90deg, #1976D2 0%, #303F9F 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              My Web Projects
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                maxWidth: 700, 
                mx: 'auto', 
                color: theme.palette.text.secondary,
                mb: 4
              }}
            >
              Explore a collection of my most significant web development work spanning frontend interfaces,
              fullstack applications, and interactive experiences. Each project represents a unique challenge and solution.
            </Typography>
          </motion.div>

          <Box sx={{ borderBottom: 1, borderColor: 'divider', maxWidth: 500, mx: 'auto' }}>
            <Tabs 
              value={category} 
              onChange={handleCategoryChange} 
              variant="scrollable"
              scrollButtons={isMobile ? "auto" : false}
              allowScrollButtonsMobile
              centered={!isMobile}
              sx={{ 
                '& .MuiTabs-indicator': { 
                  height: 3,
                  borderRadius: '3px 3px 0 0'
                }
              }}
            >
              <Tab 
                icon={<CodeIcon />} 
                iconPosition="start" 
                label="All" 
                value="all" 
                sx={{ textTransform: 'none', fontWeight: 600 }} 
              />
              <Tab 
                icon={<WebIcon />} 
                iconPosition="start" 
                label="Frontend" 
                value="frontend" 
                sx={{ textTransform: 'none', fontWeight: 600 }} 
              />
              <Tab 
                icon={<CodeIcon />} 
                iconPosition="start" 
                label="Full Stack" 
                value="fullstack" 
                sx={{ textTransform: 'none', fontWeight: 600 }} 
              />
              <Tab 
                icon={<StarIcon />} 
                iconPosition="start" 
                label="Featured" 
                value="featured" 
                sx={{ textTransform: 'none', fontWeight: 600 }} 
              />
            </Tabs>
          </Box>
        </Box>

        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            exit={{ opacity: 0 }}
          >
            <Grid container spacing={3} justifyContent="center">
              {filterProjects().map((project) => (
                <Grid item xs={12} sm={6} md={4} key={project.id}>
                  <motion.div
                    variants={cardVariants}
                    onMouseEnter={() => setHoveredCard(project.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <Card 
                      elevation={hoveredCard === project.id ? 8 : 1}
                      sx={{ 
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease-in-out',
                        borderRadius: '16px',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                        }
                      }}
                    >
                      <Box sx={{ position: 'relative' }}>
                        <CardMedia
                          component="img"
                          height={200}
                          image={project.placeholderImage || project.image}
                          alt={project.title}
                          sx={{ 
                            objectFit: 'cover',
                          }}
                        />
                        <Box 
                          sx={{ 
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0,0,0,0.4)',
                            opacity: hoveredCard === project.id ? 1 : 0,
                            transition: 'opacity 0.3s ease',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 2
                          }}
                        >
                          <Tooltip title="View Code">
                            <IconButton 
                              component="a"
                              href={project.githubLink}
                              target="_blank"
                              sx={{ 
                                backgroundColor: 'rgba(255,255,255,0.9)',
                                '&:hover': { backgroundColor: 'rgba(255,255,255,1)' }
                              }}
                            >
                              <GitHubIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Live Demo">
                            <IconButton 
                              component="a"
                              href={project.liveLink}
                              target="_blank"
                              sx={{ 
                                backgroundColor: theme.palette.primary.main,
                                color: 'white',
                                '&:hover': { backgroundColor: theme.palette.primary.dark }
                              }}
                            >
                              <LaunchIcon />
                            </IconButton>
                          </Tooltip>
                        </Box>
                        <Chip 
                          icon={getCategoryIcon(project.category)}
                          label={project.category === "fullstack" ? "Full Stack" : "Frontend"}
                          size="small"
                          sx={{ 
                            position: 'absolute',
                            top: 16,
                            right: 16,
                            backgroundColor: 'rgba(255,255,255,0.85)',
                            borderRadius: '16px',
                            fontWeight: 500,
                            '& .MuiChip-icon': {
                              color: theme.palette.primary.main
                            }
                          }}
                        />
                        {project.featured && (
                          <Chip 
                            label="Featured"
                            size="small"
                            color="secondary"
                            sx={{ 
                              position: 'absolute',
                              top: 16,
                              left: 16,
                              borderRadius: '16px',
                              fontWeight: 500,
                            }}
                          />
                        )}
                      </Box>
                      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                          {project.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                          {expanded === project.id ? project.detailedDescription : project.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                          {project.technologies.slice(0, expanded === project.id ? project.technologies.length : 3).map((tech, index) => (
                            <Chip 
                              key={index} 
                              label={tech} 
                              size="small" 
                              sx={{ 
                                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
                                fontSize: '0.7rem',
                              }}
                            />
                          ))}
                          {project.technologies.length > 3 && expanded !== project.id && (
                            <Chip 
                              label={`+${project.technologies.length - 3}`} 
                              size="small" 
                              sx={{ 
                                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
                                fontSize: '0.7rem',
                              }}
                            />
                          )}
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Button 
                            onClick={() => toggleExpanded(project.id)} 
                            size="small" 
                            sx={{ textTransform: 'none' }}
                          >
                            {expanded === project.id ? "Show Less" : "Learn More"}
                          </Button>
                          <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton 
                              component="a"
                              href={project.githubLink}
                              target="_blank"
                              size="small"
                            >
                              <GitHubIcon fontSize="small" />
                            </IconButton>
                            <IconButton 
                              component="a"
                              href={project.liveLink}
                              target="_blank"
                              size="small"
                              color="primary"
                            >
                              <LaunchIcon fontSize="small" />
                            </IconButton>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default ProjectsSection;