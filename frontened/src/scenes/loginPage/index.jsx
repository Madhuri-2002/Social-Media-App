import React, { useState } from 'react'
import { Box, Typography, useTheme, useMediaQuery, IconButton } from '@mui/material'
import { DarkMode,LightMode } from '@mui/icons-material';
import Form from './form';
import { setMode } from 'state';
import { useDispatch } from 'react-redux';
import FlexBetween from 'components/FlexBetween';

const LoginPage = () => {
    const theme = useTheme()
    const dispatch = useDispatch()


    const isNonMobileScreens = useMediaQuery("(min-width:1000px)")
    return (
        <Box>
            <FlexBetween
                width="100%"
                backgroundColor={theme.palette.background.alt}
                p="1rem 6%"
                textAlign="center"
            >
                <Typography fontWeight="bold" fontSize="32px" color="primary">
                    SparkSphere
                </Typography>
                <IconButton onClick={() => dispatch(setMode())}>
                    {theme.palette.mode == "dark" ?
                        (
                            <DarkMode sx={{ fontSize: "25px" }} />
                        ) : (
                            <LightMode sx={{ color: "dark", fontSize: "25px" }} />
                        )}
                </IconButton>
            </FlexBetween>

            <Box
                width={isNonMobileScreens ? "35%" : "89%"}
                p="2rem"
                m="2rem auto"
                borderRadius="1.5rem"
                backgroundColor={theme.palette.background.alt}
            >
                <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }} color="teal">
                    Welcome to SparkSphere, Platform for connections 🤝!
                </Typography>
                <Form />
            </Box>
        </Box>
    )
}

export default LoginPage