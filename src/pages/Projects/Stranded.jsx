import React, {useEffect} from 'react';

import Header from '../../components/Header';
import HeroSection from '../../components/Project Sections/HeroSection';
import OverviewSection from '../../components/Project Sections/OverviewSection';
import FeaturesSection from '../../components/Project Sections/FeaturesSection';
import GallerySection from '../../components/Project Sections/GallerySection';
import DeveloperSection from '../../components/Project Sections/DeveloperSection';
import LinkSection from '../../components/Project Sections/LinksSection';

import { heroSection, overviewSection, featuresSection, gallery, developerNote, links } from '../../data/strandedData';

function Stranded() {
    useEffect(() => {
                document.title = 'Jalen Moore | Stranded';
    }, []);

    return (
        <div>
            <Header />
            <HeroSection title = {heroSection.title} tagline={heroSection.tagline} image = {heroSection.image} buildOptions = {heroSection.builds}/>
            <div className = 'project-section-borderline'/>
            <OverviewSection text = {overviewSection.text} />
            <div className = 'project-section-borderline'/>
            <FeaturesSection features = {featuresSection} />
            <div className = 'project-section-borderline'/>
            <GallerySection images = {gallery} />
            <div className = 'project-section-borderline'/>
            <DeveloperSection text = {developerNote.text} />
            <br /><br /><br />
            <LinkSection links = {links}/>
        </div>
    );
}

export default Stranded;