import {useEffect, useState} from 'react'
import Papa from 'papaparse';
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom';
import {Navbar, Container, Nav, Row, Col, Form, Button, InputGroup, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
    return (
        <footer className="bg-dark text-white mt-3 p-4" style={{ fontFamily: "'Merriweather', serif" }}>
            <Container>
            <div className="text-center py-2">
                &copy; Copyright Kaitlyn Kushner 2026
            </div>
            </Container>
        </footer>
    );
}