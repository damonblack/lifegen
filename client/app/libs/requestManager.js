import request from 'axios';
import _ from 'lodash';

export default {

  createCharacter() {
    return (
      this._doPost('POST', '/characters.json')
    );
  },

  updateCharacter(characterId, data) {
    return (
      this._doPost('PUT', `/lives/${characterId}.json`, {life: data})
    );

  },

  deleteCharacter(characterId) {
    return (
      this._doPost('DELETE', `/lives/${characterId}.json`)
    );
  },

  _doPost(method, url, data) {
    const csrfToken = this._getCSRFToken();

    if(csrfToken) {
      return (
        request({
          method: method,
          url: url,
          responseType: 'json',
          headers: {
            'X-CSRF-Token': csrfToken.content
          },
          data: data
        })
      );
    } else {
      alert("Please login first");
    }

  },

  _getCSRFToken() {
    return _.find(document.querySelectorAll('meta'), ['name', 'csrf-token']);
  }




};
