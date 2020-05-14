import React from 'react';

import SearchBar from './searchBar';
import SearchCard from './searchCard';
import SkillCard from './skillCard';

import './skills.scss';
const sortedSkills = [
  { name: "Search on Google 😎", rating: 5 },
  { name: "HTML(5)", rating: 4.5 },
  { name: "CSS(3)", rating: 4.5 },
  { name: "JavaScript ES5/ES6/ES7", rating: 4.5 },
  { name: "Browser API/ DOM", rating: 4 },
  { name: "SASS/SCSS", rating: 4 },
  { name: "JSON", rating: 4 },
  { name: "HTTP", rating: 3.5 },
  { name: "AJAX", rating: 3.5 },
  { name: "MVC Pattern", rating: 3.5 },
  { name: "XML", rating: 3 },
  { name: "BEM", rating: 3 },
  { name: "UML", rating: 3 },
  { name: "ReactJS", rating: 4 },
  { name: "React Hook", rating: 4 },
  { name: "SPA", rating: 4 },
  { name: "ANT Design", rating: 4 },
  { name: "JQuery", rating: 4 },
  { name: "Boostrap", rating: 4 },
  { name: "Responsive Design", rating: 4 },
  { name: "Material UI", rating: 3.5 },
  { name: "Webpack", rating: 3 },
  { name: "SEO", rating: 3 },
  { name: "PWA", rating: 3 },
  { name: "NodeJS", rating: 4 },
  { name: "Express", rating: 4 },
  { name: "RestAPI", rating: 4 },
  { name: "MongoDB", rating: 4 },
  { name: "Security", rating: 3.5 },
  { name: "Testing", rating: 3.5 },
  { name: "MySQL", rating: 3.5 },
  { name: "PHP", rating: 3.5 },
  { name: "Azure Virtual Machine", rating: 3.5 },
  { name: "Azure Virtual networks", rating: 3.5 },
  { name: "AWS EC2", rating: 3 },
  { name: "MongoDB Atlas", rating: 3 },
  { name: "Heruko", rating: 3 },
  { name: "Firebase Firestore", rating: 3 },
  { name: "Firebase Authentication", rating: 2.5 },
  { name: "Firebase Cloud Function", rating: 2.5 },
  { name: "Firebase Cloud Hosting", rating: 2.5 },
  { name: "Ansible", rating: 4 },
  { name: "MS Office", rating: 4 },
  { name: "Command line interface", rating: 4 },
  { name: "Windows", rating: 4 },
  { name: "Adobe XD", rating: 3.5 },
  { name: "Git/GitHub", rating: 3.5 },
  { name: "VS Code", rating: 3.5 },
  { name: "Blockchain Fundamental", rating: 3.5 },
  { name: "Web3.js", rating: 3.5 },
  { name: "Solidity", rating: 3.5 },
  { name: "Postman", rating: 3.5 },
  { name: "Centos 7", rating: 3.5 },
  { name: "Ubuntu 16.04", rating: 3.5 },
  { name: "Python", rating: 3 },
]
const skills = [
  {
    title: "Web Basic",
    description: "Basic knowledge and fundamentals for modern web development",
    skills: [
      { name: "Search on Google 😎", rating: 5 },
      { name: "HTML(5)", rating: 4.5 },
      { name: "CSS(3)", rating: 4.5 },
      { name: "JavaScript ES5/ES6/ES7", rating: 4.5 },
      { name: "Browser API/ DOM", rating: 4 },
      { name: "SASS/SCSS", rating: 4 },
      { name: "JSON", rating: 4 },
      { name: "HTTP", rating: 3.5 },
      { name: "AJAX", rating: 3.5 },
      { name: "MVC Pattern", rating: 3.5 },
      { name: "XML", rating: 3 },
      { name: "BEM", rating: 3 },
      { name: "UML", rating: 3 },
    ]
  },
  {
    title: "Front-end Stuffs",
    description: "Frameworks, knowledges, senses and whatever user can see or feel",
    skills: [
      { name: "ReactJS", rating: 4 },
      { name: "React Hook", rating: 4 },
      { name: "SPA", rating: 4 },
      { name: "ANT Design", rating: 4 },
      { name: "JQuery", rating: 4 },
      { name: "Boostrap", rating: 4 },
      { name: "Responsive Design", rating: 4 },
      { name: "Material UI", rating: 3.5 },
      { name: "Webpack", rating: 3 },
      { name: "SEO", rating: 3 },
      { name: "PWA", rating: 3 },
    ]
  },
  {
    title: "Back-end Stuffs",
    description: "Handling data, security and performance",
    skills: [
      { name: "NodeJS", rating: 4 },
      { name: "Express", rating: 4 },
      { name: "RestAPI", rating: 4 },
      { name: "MongoDB", rating: 4 },
      { name: "Security", rating: 3.5 },
      { name: "Testing", rating: 3.5 },
      { name: "MySQL", rating: 3.5 },
      { name: "PHP", rating: 3.5 }
    ]
  },
  {
    title: "Cloud Services",
    description: "Popular cloud serivces provided by big companies",
    skills: [
      { name: "Azure Virtual Machine", rating: 3.5 },
      { name: "Azure Virtual networks", rating: 3.5 },
      { name: "AWS EC2", rating: 3 },
      { name: "MongoDB Atlas", rating: 3 },
      { name: "Heruko", rating: 3 },
      { name: "Firebase Firestore", rating: 3 },
      { name: "Firebase Authentication", rating: 2.5 },
      { name: "Firebase Cloud Function", rating: 2.5 },
      { name: "Firebase Cloud Hosting", rating: 2.5 },
    ]
  },
  {
    title: "Others",
    description: "Some tools/softwares may or may not related to web development",
    skills: [
      { name: "Ansible", rating: 4 },
      { name: "MS Office", rating: 4 },
      { name: "Command line interface", rating: 4 },
      { name: "Windows", rating: 4 },
      { name: "Adobe XD", rating: 3.5 },
      { name: "Git/GitHub", rating: 3.5 },
      { name: "VS Code", rating: 3.5 },
      { name: "Blockchain Fundamental", rating: 3.5 },
      { name: "Web3.js", rating: 3.5 },
      { name: "Solidity", rating: 3.5 },
      { name: "Postman", rating: 3.5 },
      { name: "Centos 7", rating: 3.5 },
      { name: "Ubuntu 16.04", rating: 3.5 },
      { name: "Python", rating: 3 },
    ]
  },
]

class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      size: "middle"
    };
  }
  handleChange = (e) => {
    this.setState({
      searchField: e.target.value,
    });

  }
  handleFocus = (e) => {
    this.card_container_ref.current.classList.add('disappear');
    this.search_container_ref.current.classList.remove('disappear');
    this.setState({ size: "large" })
  }
  handleBlur = (e) => {
    this.card_container_ref.current.classList.remove('disappear');
    this.search_container_ref.current.classList.add('disappear');
    this.setState({ size: "middle" })
  }
  card_container_ref = React.createRef()
  search_container_ref = React.createRef()
  render() {
    let filteredSkills = [];
    if (!this.state.searchField.trim()) {
      filteredSkills = [];
    } else {
      const result = sortedSkills.filter(skill =>
        skill.name.toLowerCase().includes(this.state.searchField.trim().toLowerCase())
      );
      filteredSkills = [...result];
    }
    return (
      <div className="skills__container">
        <div className="skills__header">
          <div className="skills__header__title">What can I do ?</div>
          <br></br>
          <SearchBar
            size={this.state.size}
            handleChange={this.handleChange}
            handleFocus={this.handleFocus}
            handleBlur={this.handleBlur}
          />
        </div>
        <div className="skills__card__container" ref={this.card_container_ref}>
          {skills.map((skill, index) =>
            <SkillCard skill={skill} key={index} />
          )}
        </div>
        <div className="skills__card__search__container disappear" ref={this.search_container_ref}>
          <SearchCard skill={{
            title: "Search Result...",
            skills: filteredSkills
          }} />

        </div>
      </div>
    );
  }


}

export default Skills;
