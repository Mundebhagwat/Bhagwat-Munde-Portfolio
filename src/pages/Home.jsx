import React, { useEffect, useRef } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Divider,
  Chip,
  IconButton,
  Paper,
  Avatar
} from '@mui/material';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';

// Import MUI icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import StorageIcon from '@mui/icons-material/Storage';

// Skills data
const skills = [
  "React", "Node.js", "MongoDB", "Express", "JavaScript",
  "TypeScript", "Material UI", "Redux", "RESTful APIs", "Git"
];

// Featured projects data
const featuredProjects = [
  {
    id: 1,
    title: "ParkNow Web App",
    description: "Full-stack ParkNow web app with payment integration, user authentication, and admin dashboard. This app provides the solution to the parking problem, user can book the parking simply searching the location.",
    tags: ["React", "Node.js", "MongoDB", "JavaScript"],
    image: "https://res.cloudinary.com/dbqjo8ncc/image/upload/v1745729988/pecl50k7qwnw8b3eq2dk.png",
    codeLink: "https://github.com/Mundebhagwat?tab=repositories",
    liveLink: "https://parknow-b4vs.onrender.com/"
  },
  {
    id: 2,
    title: "Hotel Management App",
    description: "Featured Hotel Management Web App, provides user's to view and book the hotels room.",
    tags: ["React", "Redux", "MongoDB", "Material UI"],
    image: "https://res.cloudinary.com/dbqjo8ncc/image/upload/v1745730206/ruiuuva6ebgc8d0bb6gx.png",
    codeLink: "https://github.com/Mundebhagwat?tab=repositories",
    liveLink: "https://hotel-booking-lgm4.onrender.com/"
  },
  {
    id: 3,
    title: "Real Time Chat App ",
    description: "Real Time Chat App, Users can join room and talk with the friends.",
    tags: ["React", "Node.js", "Express"],
    image: "https://res.cloudinary.com/dbqjo8ncc/image/upload/v1745730688/ermyzid9l1xd0xykh7bi.png",
    codeLink: "https://github.com/Mundebhagwat?tab=repositories",
    liveLink: "https://real-time-chat-ewj8.onrender.com/"
  }
];

// Animated section component
const AnimatedSection = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: delay,
          ease: "easeOut"
        }
      });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

// Project card component
const ProjectCard = ({ project, index }) => {
  const theme = useTheme();

  return (
    <AnimatedSection delay={index * 0.1}>
      <Paper
        elevation={0}
        sx={{
          borderRadius: 4,
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          border: '1px solid',
          borderColor: 'rgba(0,0,0,0.03)',
          transition: 'all 0.4s ease',
          height: '100%',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            borderColor: theme.palette.primary.main + '40',
          }
        }}
      >
        <Box
          sx={{
            height: 220,
            width: '100%',
            overflow: 'hidden',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(0deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0) 50%)`,
              zIndex: 1
            }
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'all 0.8s ease',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 15,
              right: 15,
              zIndex: 2,
              bgcolor: 'background.paper',
              borderRadius: '50%',
              p: 0.8,
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          >
            <IconButton
              size="small"
              sx={{
                color: theme.palette.primary.main,
                fontSize: '1rem'
              }}
            >
              <CodeIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight="700" gutterBottom>
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, height: 60, overflow: 'hidden' }}>
            {project.description}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            {project.tags.map((tag, i) => (
              <Chip
                key={i}
                label={tag}
                size="small"
                sx={{
                  backgroundColor: `${theme.palette.primary.main}15`,
                  color: theme.palette.primary.main,
                  fontWeight: 500,
                  borderRadius: '6px'
                }}
              />
            ))}
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="outlined"
              size="small"
              href={project.codeLink}
              startIcon={<GitHubIcon />}
              sx={{
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 600
              }}
            >
              Code
            </Button>
            <Button
              variant="contained"
              size="small"
              href={project.liveLink}
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius: '8px',
                textTransform: 'none',
                boxShadow: `0 4px 10px ${theme.palette.primary.main}30`,
                fontWeight: 600
              }}
            >
              Live Demo
            </Button>
          </Box>
        </Box>
      </Paper>
    </AnimatedSection>
  );
};

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{
      bgcolor: theme.palette.background.default,
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.light}15, ${theme.palette.primary.main}05)`,
          filter: 'blur(100px)',
          top: -100,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 0
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.secondary.light}15, ${theme.palette.secondary.main}05)`,
          filter: 'blur(80px)',
          top: 600,
          left: '20%',
          zIndex: 0
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.light}10, ${theme.palette.primary.main}05)`,
          filter: 'blur(120px)',
          top: 400,
          right: '10%',
          zIndex: 0
        }}
      />

      {/* Hero Section - Centered Layout */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            pt: isMobile ? 10 : 14,
            pb: isMobile ? 8 : 10,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            {/* Profile Image - Centered */}
            <Avatar
              src="https://res.cloudinary.com/dbqjo8ncc/image/upload/v1743825159/hc5ahketdnhiqfwu77mx.png"
              alt="Developer Profile"
              sx={{
                width: isMobile ? 160 : 180,
                height: isMobile ? 160 : 180,
                mb: 4,
                border: '4px solid white',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              }}
            />

            <Typography
              component="span"
              variant="subtitle1"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 600,
                letterSpacing: 1,
                mb: 1
              }}
            >
              Full-Stack Developer | Emerging AI Enthusiast 
            </Typography>

            <Typography
              variant={isMobile ? "h3" : "h2"}
              component="h1"
              fontWeight="800"
              sx={{
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.2,
                mb: 2,
                maxWidth: isMobile ? '100%' : '80%'
              }}
            >
              Transforming Ideas into Seamless Digital Experiences
            </Typography>

            <Typography
              variant="h6"
              color="text.secondary"
              fontWeight="400"
              sx={{ mb: 4, maxWidth: isMobile ? '100%' : '60%' }}
            >
              I design and develop modern, responsive web applications that solve real-world problems with clean code and intuitive user experiences.
            </Typography>

            <Box sx={{ display: 'flex', gap: 3, mb: 6 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={Link}
                to="/projects"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  borderRadius: 3,
                  py: 1.5,
                  px: 4,
                  boxShadow: `0 10px 25px ${theme.palette.primary.main}40`,
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1rem'
                }}
              >
                View My Work
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                component={Link}
                to="/contact"
                sx={{
                  borderRadius: 3,
                  py: 1.5,
                  px: 4,
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1rem',
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px',
                  }
                }}
              >
                Contact Me
              </Button>
            </Box>

            {/* Social Media Links */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                mb: 2
              }}
            >
              {[
                { icon: <GitHubIcon />, label: "GitHub", link: "https://github.com/Mundebhagwat" },
                { icon: <LinkedInIcon />, label: "LinkedIn", link: "https://www.linkedin.com/in/munde-bhagwat/" },
                { icon: <TwitterIcon />, label: "Twitter", link: "https://twitter.com/yourusername" },
                { icon: <EmailIcon />, label: "Email", link: "mailto:bmunde031@gmail.com" }
              ].map((item, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: theme.palette.primary.main,
                      transform: 'translateY(-5px)',
                      transition: 'all 0.3s ease'
                    },
                    transition: 'all 0.3s ease'
                  }}
                  aria-label={item.label}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                mt: 6
              }}
            >
              <Box
                sx={{
                  width: 30,
                  height: 2,
                  bgcolor: 'grey.300'
                }}
              />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontWeight: 500 }}
              >
                SCROLL DOWN TO EXPLORE
              </Typography>
              <Box
                sx={{
                  width: 30,
                  height: 2,
                  bgcolor: 'grey.300'
                }}
              />
            </Box>
          </motion.div>
        </Box>
      </Container>

      {/* Services/Skills Section */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          py: isMobile ? 8 : 12,
          position: 'relative',
          zIndex: 1,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -80,
            left: 0,
            right: 0,
            height: 80,
            background: `linear-gradient(to bottom, transparent, ${theme.palette.background.paper})`,
            zIndex: 0
          }
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <AnimatedSection>
              <Typography
                component="span"
                variant="subtitle1"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  letterSpacing: 1
                }}
              >
                WHAT I DO
              </Typography>
              <Typography variant="h3" fontWeight="bold" sx={{ mt: 1, mb: 2 }}>
                My Expertise
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 700, mx: 'auto' }}
              >
                With a focus on modern web technologies and best practices, I deliver high-quality solutions tailored to your specific needs.
              </Typography>
            </AnimatedSection>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {[
              {
                icon: <CodeIcon sx={{ fontSize: 40 }} />,
                title: "Frontend Development",
                description: "Creating responsive, interactive user interfaces with React, Redux, and modern CSS frameworks"
              },
              {
                icon: <StorageIcon sx={{ fontSize: 40 }} />,
                title: "Backend Development",
                description: "Building robust APIs and server-side applications with Node.js, Express, and MongoDB"
              },
              {
                icon: <DesignServicesIcon sx={{ fontSize: 40 }} />,
                title: "UI/UX Design",
                description: "Designing intuitive, user-centered interfaces with clean aesthetics and optimal user experience"
              }
            ].map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <AnimatedSection delay={index * 0.1}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      borderRadius: 4,
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                      },
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      border: '1px solid',
                      borderColor: 'rgba(0,0,0,0.05)'
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: `${theme.palette.primary.main}15`,
                        color: theme.palette.primary.main,
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mt: 1 }}>
                      {service.description}
                    </Typography>
                  </Paper>
                </AnimatedSection>
              </Grid>
            ))}
          </Grid>

          {/* Tech Stack Section */}
          <Box sx={{ mt: 12 }}>
            <AnimatedSection>
              <Typography
                variant="h5"
                align="center"
                fontWeight="600"
                sx={{ mb: 5 }}
              >
                Technologies I Work With
              </Typography>
              <Paper
                elevation={0}
                sx={{
                  py: 5,
                  px: 4,
                  borderRadius: 4,
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: 2,
                  backgroundColor: 'rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0,0,0,0.05)',
                }}
              >
                {skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    sx={{
                      py: 2.5,
                      borderRadius: 3,
                      fontWeight: 500,
                      fontSize: '1rem',
                      backgroundColor: index % 3 === 0
                        ? `${theme.palette.primary.main}15`
                        : index % 3 === 1
                          ? `${theme.palette.secondary.main}15`
                          : 'rgba(0,0,0,0.03)',
                      color: index % 3 === 0
                        ? theme.palette.primary.main
                        : index % 3 === 1
                          ? theme.palette.secondary.main
                          : theme.palette.text.primary,
                      '&:hover': {
                        backgroundColor: index % 3 === 0
                          ? `${theme.palette.primary.main}25`
                          : index % 3 === 1
                            ? `${theme.palette.secondary.main}25`
                            : 'rgba(0,0,0,0.06)',
                      }
                    }}
                  />
                ))}
              </Paper>
            </AnimatedSection>
          </Box>
        </Container>
      </Box>

      {/* About Preview Section - Centered Layout */}
      <Container maxWidth="lg">
        <Box sx={{ py: isMobile ? 8 : 12, textAlign: 'center' }}>
          <AnimatedSection>
            <Typography
              component="span"
              variant="subtitle1"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 600,
                letterSpacing: 1
              }}
            >
              ABOUT ME
            </Typography>
            <Typography variant="h3" fontWeight="bold" sx={{ mt: 1, mb: 3 }}>
              Who I Am
            </Typography>
          </AnimatedSection>

          <Grid container spacing={6} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={5}>
              <AnimatedSection>
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <Box
                    sx={{
                      width: 280,
                      height: 380,
                      borderRadius: 6,
                      overflow: 'hidden',
                      position: 'relative',
                      boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                      border: '6px solid white',
                      zIndex: 2
                    }}
                  >
                    <img
                      src="https://res.cloudinary.com/dbqjo8ncc/image/upload/v1743825159/hc5ahketdnhiqfwu77mx.png"
                      alt="Developer portrait"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </Box>

                  {/* Decorative elements */}
                  <Box
                    sx={{
                      position: 'absolute',
                      width: 180,
                      height: 180,
                      borderRadius: 4,
                      bgcolor: `${theme.palette.primary.main}10`,
                      border: `2px dashed ${theme.palette.primary.main}30`,
                      bottom: -30,
                      right: 20,
                      zIndex: 1
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${theme.palette.primary.light}30, ${theme.palette.primary.main}20)`,
                      top: 40,
                      left: 40,
                      zIndex: 1
                    }}
                  />
                </Box>
              </AnimatedSection>
            </Grid>

            <Grid item xs={12} md={7}>
              <AnimatedSection delay={0.2}>
                <Box sx={{ textAlign: isMobile ? 'center' : 'left', maxWidth: 600, mx: 'auto' }}>
                  <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                    I'm a passionate full-stack developer with expertise in building modern web applications that combine clean code, intuitive interfaces, and cutting-edge technologies. With a strong foundation in computer science and years of practical experience, I approach each project with creativity and precision.
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                    My journey in web development began over 4 years ago, and since then, I've had the privilege of working with diverse clients and projects, from startups to established businesses. My goal is always the same: to create digital solutions that not only meet requirements but exceed expectations.
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: isMobile ? 'center' : 'flex-start',
                      gap: 5,
                      mb: 4
                    }}
                  >
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h3" fontWeight="bold" color="primary" sx={{ mb: 1 }}>
                        8+
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Projects Completed
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h3" fontWeight="bold" color="primary" sx={{ mb: 1 }}>
                        1+
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Years Experience
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h3" fontWeight="bold" color="primary" sx={{ mb: 1 }}>
                        5+
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Happy Clients
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                    <Button
                      variant="contained"
                      component={Link}
                      to="/about"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        borderRadius: 3,
                        py: 1.5,
                        px: 4,
                        fontWeight: 600,
                        textTransform: 'none',
                        fontSize: '1rem',
                        boxShadow: `0 10px 20px ${theme.palette.primary.main}30`,
                      }}
                    >
                      More About Me
                    </Button>
                  </Box>
                </Box>
              </AnimatedSection>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Featured Projects Section */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          py: isMobile ? 8 : 12,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -80,
            left: 0,
            right: 0,
            height: 80,
            background: `linear-gradient(to bottom, transparent, ${theme.palette.background.paper})`,
            zIndex: 0
          }
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <AnimatedSection>
              <Typography
                component="span"
                variant="subtitle1"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  letterSpacing: 1
                }}
              >
                MY WORK
              </Typography>
              <Typography variant="h3" fontWeight="bold" sx={{ mt: 1, mb: 2 }}>
                Featured Projects
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 700, mx: 'auto' }}
              >
                A selection of my recent work showcasing my development skills and attention to detail.
              </Typography>
            </AnimatedSection>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {featuredProjects.map((project, index) => (
              <Grid item xs={12} md={4} key={project.id}>
                <ProjectCard project={project} index={index} />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <AnimatedSection>
              <Button
                variant="contained"
                component={Link}
                to="/projects"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  borderRadius: 3,
                  py: 1.5,
                  px: 4,
                  boxShadow: `0 10px 20px ${theme.palette.primary.main}30`,
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1rem'
                }}
              >
                View All Projects
              </Button>
            </AnimatedSection>
          </Box>
        </Container>
      </Box>

      {/* Call to Action */}
      <Container maxWidth="md">
        <Box sx={{ py: isMobile ? 8 : 14 }}>
          <AnimatedSection>
            <Paper
              elevation={0}
              sx={{
                textAlign: 'center',
                p: isMobile ? 4 : 8,
                borderRadius: 6,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}08, ${theme.palette.secondary.main}12)`,
                border: '1px solid',
                borderColor: `${theme.palette.primary.main}20`,
                boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Decorative elements */}
              <Box
                sx={{
                  position: 'absolute',
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${theme.palette.primary.light}20, transparent 70%)`,
                  top: -100,
                  right: -50
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  width: 150,
                  height: 150,
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${theme.palette.secondary.light}20, transparent 70%)`,
                  bottom: -70,
                  left: -50
                }}
              />

              <Typography
                variant="h3"
                fontWeight="bold"
                gutterBottom
                sx={{ position: 'relative', zIndex: 1 }}
              >
                Let's Work Together
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                paragraph
                sx={{
                  maxWidth: 600,
                  mx: 'auto',
                  mb: 5,
                  position: 'relative',
                  zIndex: 1
                }}
              >
                Have a project in mind or looking for a developer to join your team? I'd love to hear about your ideas and how I can help bring them to life.
              </Typography>
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  to="/contact"
                  endIcon={<EmailIcon />}
                  sx={{
                    borderRadius: 3,
                    py: 2,
                    px: 5,
                    boxShadow: `0 10px 20px ${theme.palette.primary.main}40`,
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: '1.1rem'
                  }}
                >
                  Get In Touch
                </Button>
              </Box>
            </Paper>
          </AnimatedSection>
        </Box>
      </Container>

      {/* Testimonials Section
      <Box sx={{ bgcolor: 'background.paper', py: isMobile ? 8 : 12 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <AnimatedSection>
              <Typography
                component="span"
                variant="subtitle1"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  letterSpacing: 1
                }}
              >
                TESTIMONIALS
              </Typography>
              <Typography variant="h3" fontWeight="bold" sx={{ mt: 1, mb: 2 }}>
                What Clients Say
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 700, mx: 'auto' }}
              >
                Don't just take my word for it — here's what others have to say about working with me.
              </Typography>
            </AnimatedSection>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {[
              {
                quote: "Working with this developer was a game-changer for our project. Their technical expertise combined with an eye for design produced results that exceeded our expectations.",
                name: "Sarah Johnson",
                position: "Product Manager, TechCorp",
                avatar: "/api/placeholder/100/100"
              },
              {
                quote: "I was impressed by how quickly complex requirements were understood and implemented. The attention to detail and commitment to quality made all the difference.",
                name: "Michael Roberts",
                position: "Founder, StartupX",
                avatar: "/api/placeholder/100/100"
              },
              {
                quote: "Not only was the technical execution flawless, but the communication throughout the project was excellent. I always felt informed and confident about the progress.",
                name: "Emily Chen",
                position: "CTO, InnovateNow",
                avatar: "/api/placeholder/100/100"
              }
            ].map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <AnimatedSection delay={index * 0.1}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      borderRadius: 6,
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      border: '1px solid',
                      borderColor: 'rgba(0,0,0,0.05)',
                      position: 'relative',
                      '&::before': {
                        content: '"""',
                        position: 'absolute',
                        top: 20,
                        left: 20,
                        fontSize: '4rem',
                        lineHeight: 1,
                        fontFamily: 'Georgia, serif',
                        color: `${theme.palette.primary.main}20`,
                        zIndex: 0
                      }
                    }}
                  >
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                      sx={{
                        position: 'relative',
                        zIndex: 1,
                        fontStyle: 'italic',
                        mb: 4
                      }}
                    >
                      "{testimonial.quote}"
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Avatar
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{ width: 60, height: 60, mr: 2 }}
                      />
                      <Box sx={{ textAlign: 'left' }}>
                        <Typography variant="subtitle1" fontWeight="bold">
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.position}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </AnimatedSection>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box> */}

      {/* Stats & Facts Section */}
      <Container maxWidth="lg">
        <Box sx={{ py: isMobile ? 8 : 12 }}>
          <Grid container spacing={4} justifyContent="center">
            {[
              { number: "1+", label: "Years Experience" },
              { number: "8+", label: "Projects Completed" },
              { number: "5+", label: "Happy Clients" },
              { number: "10+", label: "Coding Hours" }
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <AnimatedSection delay={index * 0.1}>
                  <Box
                    sx={{
                      textAlign: 'center',
                      p: 3,
                      borderRadius: 4,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                      }
                    }}
                  >
                    <Typography
                      variant="h2"
                      fontWeight="bold"
                      color="primary"
                      sx={{ mb: 1 }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Box>
                </AnimatedSection>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Newsletter/Subscribe Section
      <Box
        sx={{
          bgcolor: 'background.paper',
          py: isMobile ? 8 : 12,
          borderTop: '1px solid',
          borderColor: 'rgba(0,0,0,0.05)'
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: 700,
              mx: 'auto'
            }}
          >
            <AnimatedSection>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Stay Updated
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                paragraph
                sx={{ mb: 4 }}
              >
                Subscribe to receive notifications about new projects, tech insights, and availability for freelance work.
              </Typography>
              <Box
                component="form"
                sx={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: 2,
                  justifyContent: 'center'
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    maxWidth: isMobile ? '100%' : 400,
                    position: 'relative'
                  }}
                >
                  <Box
                    component="input"
                    type="email"
                    placeholder="Your email address"
                    sx={{
                      width: '100%',
                      py: 2,
                      px: 3,
                      borderRadius: 3,
                      border: '2px solid',
                      borderColor: 'rgba(0,0,0,0.1)',
                      outline: 'none',
                      fontSize: '1rem',
                      '&:focus': {
                        borderColor: theme.palette.primary.main
                      }
                    }}
                  />
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 3,
                    py: 1.5,
                    px: 4,
                    boxShadow: `0 10px 20px ${theme.palette.primary.main}30`,
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: '1rem'
                  }}
                >
                  Subscribe
                </Button>
              </Box>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2 }}
              >
                I respect your privacy. Unsubscribe at any time.
              </Typography>
            </AnimatedSection>
          </Box>
        </Container>
      </Box> */}

      {/* Footer */}
      <Box
        sx={{
          bgcolor: theme.palette.background.default,
          py: 6,
          borderTop: '1px solid',
          borderColor: 'rgba(0,0,0,0.05)'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Bhagwat Sadashiv Munde
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ ml: 2 }}
                >
                  © {new Date().getFullYear()} | All Rights Reserved
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: isMobile ? 'flex-start' : 'flex-end',
                  gap: 3
                }}
              >
                {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                  <Typography
                    key={index}
                    component={Link}
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      fontWeight: 500,
                      '&:hover': {
                        color: theme.palette.primary.main
                      }
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;