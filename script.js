document.getElementById('police-application-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('police-name').value;
    const age = document.getElementById('police-age').value;
    const experience = document.getElementById('police-experience').value;

    const policeWebhookUrl = 'https://discord.com/api/webhooks/1259772113473114182/wHGG_lwK9f3V29zA3supbD5IUmdoxJSX448tN-VHc8p7-hB7iZFfBInq2frCTJ2s030S';

    const policePayload = {
        content: `**New Police Application**\n**Name:** ${name}\n**Age:** ${age}\n**Experience:**\n${experience}`
    };

    fetch(policeWebhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(policePayload)
    }).then(response => {
        if (response.ok) {
            alert('Police application submitted successfully!');
            document.getElementById('police-application-form').reset();
        } else {
            alert('There was an error submitting your police application.');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your police application.');
    });
});

document.getElementById('ems-application-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('ems-name').value;
    const age = document.getElementById('ems-age').value;
    const experience = document.getElementById('ems-experience').value;

    const emsWebhookUrl = '--------------------------------webhook ems------------------------------------';

    const emsPayload = {
        content: `**New EMS Application**\n**Name:** ${name}\n**Age:** ${age}\n**Experience:**\n${experience}`
    };

    fetch(emsWebhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(emsPayload)
    }).then(response => {
        if (response.ok) {
            alert('EMS application submitted successfully!');
            document.getElementById('ems-application-form').reset();
        } else {
            alert('There was an error submitting your EMS application.');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your EMS application.');
    });
});
/// Test 
    
    