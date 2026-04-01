new Vue({
  el: '#events',

  data: {
    event: { title: '', detail: '', date: '' },
    events: []
  },

  ready: function () {
    this.fetchEvents();
  },

  methods: {
    fetchEvents: function () {
      fetch('https://cm0y47fnef.execute-api.us-east-1.amazonaws.com/posts', {
        method: 'GET'
      })
      .then((response) => response.json())
      .then((posts) => {
        this.events = (posts || []).map((post) => {
          return {
            id: post.postId,
            title: post.title,
            detail: post.content,
            content: post.content,
            date: post.timestamp ? new Date(post.timestamp).toLocaleDateString() : '',
            timestamp: post.timestamp
          };
        });

        console.log('Loaded posts:', this.events);
      })
      .catch((err) => {
        console.log('Error loading posts:', err);
        alert('Failed to load posts.');
      });
    },

    addEvent: function () {
      const title = (this.event.title || '').trim();
      const detail = (this.event.detail || '').trim();

      if (!title || !detail) {
        alert('Please enter both a title and detail.');
        return;
      }

      const payload = {
        title: title,
        content: detail
      };

      console.log('Submitting:', payload);

      fetch('https://cm0y47fnef.execute-api.us-east-1.amazonaws.com/posts', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('POST failed with status ' + response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Post added:', data);
        this.event = { title: '', detail: '', date: '' };
        this.fetchEvents();
        alert('Post submitted successfully.');
      })
      .catch((err) => {
        console.log('Error adding post:', err);
        alert('Failed to submit post. Open browser console.');
      });
    },

    deleteEvent: function (eventId) {
      if (!eventId) {
        alert('Missing post ID.');
        return;
      }

      fetch(`https://cm0y47fnef.execute-api.us-east-1.amazonaws.com/posts/${eventId}`, {
        method: 'DELETE',
        mode: 'cors'
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('DELETE failed with status ' + response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Post deleted:', data);
        this.fetchEvents();
      })
      .catch((err) => {
        console.log('Error deleting post:', err);
        alert(`Failed to delete post. Open browser console.Error ${err}`);
      });
    }
  }
});
