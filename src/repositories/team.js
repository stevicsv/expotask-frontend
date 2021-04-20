import axios from '@/plugins/axios';

// Endpoints
const getAllTeams = () => axios.get('team');

// Exports
export default getAllTeams;
