import DatePickerInput from '@/components/DatePicker'
import { color } from '@/constants/colors'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Stack } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

// Dummy Data
const initialUpdates = [
  { id: '1', date: '2025-12-25', project: 'ERP Mobile App', hours: '8', description: 'Implemented login screen and validation.' },
  { id: '2', date: '2025-12-24', project: 'Website Redesign', hours: '6', description: 'Fixed responsive issues on home page.' },
  { id: '3', date: '2025-12-23', project: 'ERP Mobile App', hours: '7', description: 'Designed dashboard layout.' },
  { id: '4', date: '2025-12-22', project: 'Backend API', hours: '5', description: 'Setup database schema for users.' },
];

const DailyList = () => {
  const [updates, setUpdates] = useState(initialUpdates);
  const [modalVisible, setModalVisible] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form State
  const [newProject, setNewProject] = useState('');
  const [newHours, setNewHours] = useState('');
  const [newDesc, setNewDesc] = useState('');

  const handleReset = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const getFilteredUpdates = () => {
    if (!startDate && !endDate) return updates;

    return updates.filter(item => {
      const itemDate = new Date(item.date);
      // Normalize to midnight
      itemDate.setHours(0, 0, 0, 0);

      const start = startDate ? new Date(startDate) : null;
      if (start) start.setHours(0, 0, 0, 0);

      const end = endDate ? new Date(endDate) : null;
      if (end) end.setHours(23, 59, 59, 999);

      if (start && end) {
        return itemDate >= start && itemDate <= end;
      } else if (start) {
        return itemDate >= start;
      } else if (end) {
        return itemDate <= end;
      }
      return true;
    });
  };

  const handleSaveUpdate = () => {
    if (editingId) {
      // Edit existing
      setUpdates(prev => prev.map(item => item.id === editingId ? {
        ...item,
        project: newProject,
        hours: newHours,
        description: newDesc
      } : item));
    } else {
      // Add new
      const newUpdate = {
        id: String(updates.length + 1),
        date: new Date().toISOString().split('T')[0], // Today's date
        project: newProject || 'New Project',
        hours: newHours || '0',
        description: newDesc || 'No description',
      };
      setUpdates([newUpdate, ...updates]);
    }
    closeModal();
  };

  const handleEdit = (item: any) => {
    setEditingId(item.id);
    setNewProject(item.project);
    setNewHours(item.hours);
    setNewDesc(item.description);
    setModalVisible(true);
  };

  const handleDelete = (id: string) => {
    // In a real app, use Alert.alert for confirmation here
    setUpdates(prev => prev.filter(item => item.id !== id));
  };

  const closeModal = () => {
    setModalVisible(false);
    setEditingId(null);
    setNewProject('');
    setNewHours('');
    setNewDesc('');
  };

  const renderUpdateItem = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.dateText}>{item.date}</Text>
        <View style={styles.hoursBadge}>
          <Text style={styles.hoursText}>{item.hours} hrs</Text>
        </View>
      </View>
      <Text style={styles.projectText}>{item.project}</Text>
      <Text style={styles.descText}>{item.description}</Text>

      <View style={styles.cardActions}>
        <TouchableOpacity onPress={() => handleEdit(item)} style={styles.actionBtn}>
          <MaterialIcons name="edit" size={20} color={color.primary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.actionBtn}>
          <MaterialIcons name="delete" size={20} color={color.primaryRed} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const filteredUpdates = getFilteredUpdates();

  return (
    <>
      <Stack.Screen options={{ title: 'My Daily Updates' }} />
      <View style={styles.mainScreen}>

        {/* Filter Section */}
        <View style={styles.filterContainer}>
          <View style={styles.dateInputs}>
            <DatePickerInput
              label="Start Date"
              onDateChange={setStartDate}
              value={startDate}
            />
            <DatePickerInput
              label="End Date"
              onDateChange={setEndDate}
              value={endDate}
            />
          </View>
          {(startDate || endDate) && (
            <TouchableOpacity onPress={handleReset} style={styles.resetBtn}>
              <MaterialIcons name="restore" size={20} color={color.primaryRed} />
              <Text style={{ fontFamily: 'rubikRegular', color: color.primaryRed }}>Reset</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* List Section */}
        <FlatList
          data={filteredUpdates}
          renderItem={renderUpdateItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<Text style={styles.emptyText}>No updates found for this period.</Text>}
        />

        {/* Floating Action Button */}
        <TouchableOpacity style={styles.fab} onPress={() => setModalVisible(true)}>
          <MaterialIcons name="add" size={30} color="white" />
        </TouchableOpacity>

        {/* Add/Edit Update Modal */}
        <Modal
          animationType='fade'
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>{editingId ? 'Edit Daily Update' : 'Add Daily Update'}</Text>
                <TouchableOpacity onPress={closeModal}>
                  <MaterialIcons name="close" size={24} color={color.textColourLight} />
                </TouchableOpacity>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Project Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter project name"
                  value={newProject}
                  onChangeText={setNewProject}
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Working Hours</Text>
                <TextInput
                  style={styles.input}
                  placeholder="e.g. 8"
                  keyboardType="numeric"
                  value={newHours}
                  onChangeText={setNewHours}
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Description</Text>
                <TextInput
                  style={[styles.input, styles.textArea]}
                  placeholder="What did you work on today?"
                  multiline
                  numberOfLines={4}
                  textAlignVertical="top"
                  value={newDesc}
                  onChangeText={setNewDesc}
                />
              </View>

              <TouchableOpacity style={styles.submitBtn} onPress={handleSaveUpdate}>
                <Text style={styles.submitBtnText}>{editingId ? 'Save Changes' : 'Submit Update'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

      </View>
    </>
  )
}

export default DailyList

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  filterContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb'
  },
  dateInputs: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  resetBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    alignSelf: 'flex-end',
    padding: 5,
    backgroundColor: '#FEE2E2',
    borderRadius: 8,
  },
  listContent: {
    padding: 20,
    paddingBottom: 80, // Space for FAB
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  dateText: {
    fontFamily: 'rubikRegular',
    color: color.textColourLight,
    fontSize: moderateScale(12),
  },
  hoursBadge: {
    backgroundColor: '#E0F2FE',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  hoursText: {
    fontFamily: 'rubikMedium',
    color: '#0284C7',
    fontSize: moderateScale(12),
  },
  projectText: {
    fontFamily: 'rubikMedium',
    fontSize: moderateScale(16),
    color: color.textColour,
    marginBottom: 5,
  },
  descText: {
    fontFamily: 'rubikRegular',
    color: color.textColourLight,
    fontSize: moderateScale(14),
    lineHeight: 20,
  },
  emptyText: {
    textAlign: 'center',
    fontFamily: 'rubikRegular',
    color: color.textColourLight,
    marginTop: 50,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: color.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    minHeight: '60%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontFamily: 'rubikMedium',
    fontSize: moderateScale(18),
    color: color.textColour,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontFamily: 'rubikMedium',
    color: color.textColourLight,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 12,
    fontFamily: 'rubikRegular',
    fontSize: moderateScale(14),
    color: color.textColour,
    backgroundColor: '#F9FAFB',
  },
  textArea: {
    height: 100,
  },
  submitBtn: {
    backgroundColor: color.primary,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  submitBtnText: {
    fontFamily: 'rubikMedium',
    color: 'white',
    fontSize: moderateScale(16),
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 15,
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
    paddingTop: 10,
  },
  actionBtn: {
    padding: 5,
  }
})