import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("top_250.db");

export default db;