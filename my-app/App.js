import React from 'react';
const profileImage = require('./assets/icon.png');
const filterObject = require('./assets/filter.png');
const workingWoman = require('./assets/onlinework.png');
const deskwoman = require('./assets/deskwoman.png');
const health = require('./assets/health.jpg');
const voluntary = require('./assets/voluntary.jpg');
const mentorship = require('./assets/mentorship.jpg');
const tutoring = require('./assets/tutoring.jpg');
const projects = require('./assets/projects.jpg');
const food = require('./assets/food.jpg');


import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';

const App = () => {
  const categories = [
    { title: 'Exercise', tasks: '12 Tasks', image: workingWoman },
    { title: 'Study', tasks: '12 Tasks', image: deskwoman },
    { title: 'Health', tasks: '12 Tasks', image: health},
    { title: 'Voluntary Work', tasks: '2 Tasks', image: voluntary },
    { title: 'Mentorship', tasks: '11 Tasks', image: mentorship },
    { title: 'Tutoring', tasks: '18 Tasks', image: tutoring },
    { title: 'Projects', tasks: '9 Tasks', image: projects },
    { title: 'Food', tasks: '30 Tasks', image: food },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>Hello, Devs</Text>
          <Text style={styles.subHeaderText}>14 tasks today</Text>
        </View>
        <TouchableOpacity style={styles.profileIcon}>
          <Image
            source={profileImage}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity style={styles.filterIcon}>
          <Image
            source={filterObject} 
            style={styles.filterImage}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionHeader}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        {categories.map((category, index) => (
          <View key={index} style={styles.category}>
            <View style={styles.categoryTextContainer}>
              <Text style={styles.categoryText}>{category.title}</Text>
              <Text style={styles.categoryTasks}>{category.tasks}</Text>
            </View>
            <Image
              source={category.image}
              style={styles.categoryImage}
            />
          </View>
        ))}
      </ScrollView>
      <View style={styles.ongoingTasks}>
        <Text style={styles.sectionHeader}>Ongoing Task</Text>
        <TouchableOpacity style={styles.task}>
          <Text style={styles.taskText}>Mobile App Development</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.task}>
          <Text style={styles.taskText}>Web Development</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.task}>
          <Text style={styles.taskText}>Push Ups</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.task}>
          <Text style={styles.taskText}>Push Ups</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.task}>
          <Text style={styles.taskText}>Push Ups</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.task}>
          <Text style={styles.taskText}>Push Ups</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.task}>
          <Text style={styles.taskText}>Push Ups</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.task}>
          <Text style={styles.taskText}>Push Ups</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.task}>
          <Text style={styles.taskText}>Push Ups</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.task}>
          <Text style={styles.taskText}>Push Ups</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.task}>
          <Text style={styles.taskText}>Push Ups</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FAF3EB',
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 14,
    color: '#888',
  },
  profileIcon: {
    width: 55,
    height: 55,
    borderRadius: 25,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 16,
    paddingHorizontal: 8,
    marginRight: 20,
  },
  filterIcon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0522F',
    borderRadius: 16,
  },
  filterImage: {
    width: 50,
    height: 50,
  },
  categories: {
    flexDirection: 'row',
    marginBottom: 16, 
  },
  category: {
    width: 200,
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 18,
    borderRadius: 10,
    elevation: 2,
    marginRight: 18,
    position: 'relative',
  },
  categoryTextContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  categoryTasks: {
    fontSize: 14,
    color: '#888',
  },
  categoryImage: {
    width: 100,
    height: 100,
    marginTop: 40, // Added margin top to create space for text
    alignSelf: 'center',
  },
  ongoingTasks: {
    marginTop: 24, // Increased margin top for more space
    marginBottom: 16,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  task: {
    backgroundColor: '#fff',
    padding: 60,
    borderColor: '#e8d1ba',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 16,
    elevation: 2,
  },
  taskText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;