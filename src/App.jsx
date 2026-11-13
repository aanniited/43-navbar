import { useState } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import PercentIcon from '@mui/icons-material/Percent';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ContactsIcon from '@mui/icons-material/Contacts';
import Navbar from './navbar';  


const BANK_ITEMS = [
  { id: 'loans', label: 'სესხები', icon: <PercentIcon /> },
  { id: 'offers', label: 'შეთავაზებები', icon: <LocalOfferIcon /> },
  { id: 'contact', label: 'კონტაქტი', icon: <ContactsIcon /> },
];

export default function App() {
  const [orientation, setOrientation] = useState('horizontal'); 
  const [activeTab, setActiveTab] = useState('loans');

  const isVertical = orientation === 'vertical';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isVertical ? 'row' : 'column',
        minHeight: '100vh',
        bgcolor: '#f4f6f8',
      }}
    >
     
      <Navbar
        orientation={orientation}
        items={BANK_ITEMS}
        activeItem={activeTab}
        onSelect={setActiveTab}
        brandName="ბაზისბანკი"
        brandLogo={
          <Box
            sx={{
              width: 36,
              height: 36,
              bgcolor: '#003399',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              borderRadius: 1.5,
            }}
          >
            B
          </Box>
        }
        actionButtonText="მოითხოვე სესხი"
        onActionClick={() => alert('სესხის მოთხოვნa')}
      />

      
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Paper
          sx={{
            p: 4,
            bgcolor: '#ffffff',
            borderRadius: 3,
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
          }}
        >
          <Typography variant="h5" fontWeight="bold" color="#003399" gutterBottom>
            გამოთვალე და მიიღე სესხი მარტივად
          </Typography>
          <Typography color="text.secondary" mb={4}>
            სესხების ონლაინ პლატფორმა შენი მიზნების დასაფინანსებლად
          </Typography>

          <Button
            variant="outlined"
            startIcon={<SwapHorizIcon />}
            onClick={() =>
              setOrientation((prev) => (prev === 'horizontal' ? 'vertical' : 'horizontal'))
            }
            sx={{ borderColor: '#003399', color: '#003399', fontWeight: 'bold' }}
          >
            
            შეცვლა: {isVertical ? 'ვერტიკალური ' : 'ჰორიზონტალური '}
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}