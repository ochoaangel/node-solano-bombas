function formatResponse(data, error) {
  if (error) {
    return { ok: false, data: [], error };
  } else {
    return { ok: true, data, error };
  }
}

module.exports = { formatResponse };