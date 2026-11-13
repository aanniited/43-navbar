
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

const Navbar = ({
  orientation = 'horizontal', 
  items = [],
  activeItem,
  onSelect,
  brandName = 'ბაზისბანკი',
  brandLogo,
  actionButtonText = 'მოითხოვე სესხი',
  onActionClick,
  sx = {},
  activeColor = '#0055ff', 
}) => {
  const isVertical = orientation === 'vertical';

  return (
    <AppBar
      position={isVertical ? 'relative' : 'sticky'}
      elevation={0}
      sx={{
        width: isVertical ? 260 : '100%',
        height: isVertical ? '100vh' : 'auto',
        bgcolor: '#ffffff',
        color: '#333333',
        borderRight: isVertical ? '1px solid #e0e0e0' : 'none',
        borderBottom: !isVertical ? '1px solid #e0e0e0' : 'none',
        transition: 'all 0.3s ease',
        ...sx,
      }}
    >
      <Toolbar
        sx={{
          flexDirection: isVertical ? 'column' : 'row',
          alignItems: isVertical ? 'stretch' : 'center',
          justifyContent: isVertical ? 'flex-start' : 'space-between',
          height: '100%',
          py: isVertical ? 3 : 1.5,
          px: { xs: 2, md: 4 },
          gap: isVertical ? 3 : 2,
        }}
      >
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          {brandLogo}
          <Typography
            variant="h6"
            sx={{ fontWeight: 800, color: '#003399', letterSpacing: -0.5 }}
          >
            {brandName}
          </Typography>
        </Box>

        
        <List
          sx={{
            display: 'flex',
            flexDirection: isVertical ? 'column' : 'row',
            gap: 1,
            p: 0,
            flexGrow: isVertical ? 1 : 0,
            width: isVertical ? '100%' : 'auto',
          }}
        >
          {items.map((item) => {
            const isActive = activeItem === item.id;

            return (
              <ListItem key={item.id} disablePadding sx={{ width: 'auto' }}>
                <ListItemButton
                  onClick={() => onSelect(item.id)}
                  sx={{
                    borderRadius: 2,
                    px: 2,
                    py: 1,
                    color: isActive ? activeColor : '#555555',
                    bgcolor: isActive ? `${activeColor}10` : 'transparent',
                    borderLeft:
                      isVertical && isActive
                        ? `4px solid ${activeColor}`
                        : '4px solid transparent',
                    borderBottom:
                      !isVertical && isActive
                        ? `3px solid ${activeColor}`
                        : '3px solid transparent',
                    '&:hover': {
                      bgcolor: '#f4f6f8',
                      color: activeColor,
                    },
                  }}
                >
                  {item.icon && (
                    <ListItemIcon sx={{ color: 'inherit', minWidth: 34 }}>
                      {item.icon}
                    </ListItemIcon>
                  )}
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: '0.95rem',
                      fontWeight: isActive ? 600 : 500,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        
        {actionButtonText && (
          <Button
            variant="contained"
            onClick={onActionClick}
            sx={{
              bgcolor: '#0055ff',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: '8px',
              textTransform: 'none',
              px: 3,
              py: 1,
              boxShadow: 'none',
              '&:hover': {
                bgcolor: '#0040cc',
                boxShadow: 'none',
              },
            }}
          >
            {actionButtonText}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;