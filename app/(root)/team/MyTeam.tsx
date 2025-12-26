import { color } from '@/constants/colors'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Stack } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale, scale } from 'react-native-size-matters'

// Dummy Data
const departmentMembers = [
  { id: '1', name: 'Arun Kumar', role: 'Senior Developer', image: 'https://i.pravatar.cc/150?img=11' },
  { id: '2', name: 'Sarah Jones', role: 'UI/UX Designer', image: 'https://i.pravatar.cc/150?img=5' },
  { id: '3', name: 'Mike Ross', role: 'Backend Engineer', image: 'https://i.pravatar.cc/150?img=3' },
  { id: '4', name: 'Rachel Zane', role: 'QA Specialist', image: 'https://i.pravatar.cc/150?img=9' },
  { id: '5', name: 'Harvey Specter', role: 'Project Manager', image: 'https://i.pravatar.cc/150?img=13' },
];

const hierarchyData = {
  name: 'Jessica Pearson',
  role: 'Managing Partner',
  image: 'https://i.pravatar.cc/150?img=1',
  children: [
    {
      name: 'Louis Litt',
      role: 'Senior Partner',
      image: 'https://i.pravatar.cc/150?img=8',
      children: [
        {
          name: 'Harvey Specter',
          role: 'Partner',
          image: 'https://i.pravatar.cc/150?img=13',
          children: [
            { name: 'Arun Kumar', role: 'Associate', image: 'https://i.pravatar.cc/150?img=11', isUser: true }
          ]
        }
      ]
    }
  ]
};

const TreeNode = ({ node, isLast }: { node: any, isLast?: boolean }) => {
  return (
    <View style={styles.treeNode}>
      <View style={styles.nodeContent}>
        <Image source={{ uri: node.image }} style={[styles.avatarSmall, node.isUser && styles.userHighlight]} />
        <View>
          <Text style={[styles.nodeName, node.isUser && { color: color.primary }]}>{node.name}</Text>
          <Text style={styles.nodeRole}>{node.role}</Text>
        </View>
      </View>
      {node.children && node.children.length > 0 && (
        <View style={styles.childrenContainer}>
          <View style={styles.line} />
          {node.children.map((child: any, index: number) => (
            <TreeNode key={index} node={child} isLast={index === node.children.length - 1} />
          ))}
        </View>
      )}
    </View>
  );
};


const MyTeam = () => {
  const [activeTab, setActiveTab] = useState<'Department' | 'Hierarchy'>('Department');

  const renderDepartmentItem = ({ item }: { item: any }) => (
    <View style={styles.memberCard}>
      <Image source={{ uri: item.image }} style={styles.avatar} />
      <View style={styles.memberInfo}>
        <Text style={styles.memberName}>{item.name}</Text>
        <Text style={styles.memberRole}>{item.role}</Text>
      </View>
      <TouchableOpacity style={styles.callBtn}>
        <MaterialIcons name="call" size={20} color={color.primary} />
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <Stack.Screen options={{ title: "My Team" }} />
      <View style={styles.mainScreen}>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Department' && styles.activeTab]}
            onPress={() => setActiveTab('Department')}
          >
            <Text style={[styles.tabText, activeTab === 'Department' && styles.activeTabText]}>Department</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Hierarchy' && styles.activeTab]}
            onPress={() => setActiveTab('Hierarchy')}
          >
            <Text style={[styles.tabText, activeTab === 'Hierarchy' && styles.activeTabText]}>Hierarchy</Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.contentContainer}>
          {activeTab === 'Department' ? (
            <FlatList
              data={departmentMembers}
              renderItem={renderDepartmentItem}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.listContent}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <ScrollView contentContainerStyle={styles.treeContent} showsVerticalScrollIndicator={false}>
              <Text style={styles.treeTitle}>Organizational Chart</Text>
              <TreeNode node={hierarchyData} />
            </ScrollView>
          )}
        </View>

      </View>
    </>

  )
}

export default MyTeam

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#E5E7EB',
    borderRadius: 12,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tabText: {
    fontFamily: 'rubikRegular',
    color: color.textColourLight,
    fontSize: moderateScale(14),
  },
  activeTabText: {
    fontFamily: 'rubikMedium',
    color: color.textColour,
  },
  contentContainer: {
    flex: 1,
    marginTop: 10,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  memberCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#eee',
  },
  memberInfo: {
    flex: 1,
    marginLeft: 15,
  },
  memberName: {
    fontFamily: 'rubikMedium',
    fontSize: moderateScale(16),
    color: color.textColour,
  },
  memberRole: {
    fontFamily: 'rubikRegular',
    fontSize: moderateScale(13),
    color: color.textColourLight,
    marginTop: 2,
  },
  callBtn: {
    padding: 10,
    backgroundColor: '#F0F9FF',
    borderRadius: 50,
  },

  // Tree Styles
  treeContent: {
    padding: 20,
    alignItems: 'center',
  },
  treeTitle: {
    fontFamily: 'rubikMedium',
    fontSize: moderateScale(18),
    color: color.textColour,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  treeNode: {
    alignItems: 'center',
  },
  nodeContent: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    width: scale(180),
    marginBottom: 0,
    zIndex: 2,
  },
  avatarSmall: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 8,
  },
  userHighlight: {
    borderWidth: 2,
    borderColor: color.primary,
  },
  nodeName: {
    fontFamily: 'rubikMedium',
    fontSize: moderateScale(14),
    color: color.textColour,
    textAlign: 'center',
  },
  nodeRole: {
    fontFamily: 'rubikRegular',
    fontSize: moderateScale(12),
    color: color.textColourLight,
    textAlign: 'center',
  },
  childrenContainer: {
    alignItems: 'center',
    paddingTop: 20,
    position: 'relative',
  },
  line: {
    position: 'absolute',
    top: 0,
    bottom: '100%', // Sticks up to the parent
    width: 2,
    backgroundColor: '#E5E7EB',
    height: 20, // Length of the line connecting to parent
    zIndex: 1,
  }
})