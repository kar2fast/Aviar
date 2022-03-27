import axios from 'axios'

const API_URL = '/api/collections/'

// Get user's collections
const getCollections = async token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

const updateCollectionName = async (colId, name, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.put(API_URL + colId, name, config)

  return response.data
}

const deleteCollection = async (colId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.delete(API_URL + colId, config)

  return response.data
}

const collectionService = {
  getCollections,
  updateCollectionName,
  deleteCollection
}

export default collectionService
