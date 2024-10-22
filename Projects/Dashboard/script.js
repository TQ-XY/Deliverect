
        const url = "https://api.deliverect.com/accounts?where={'accountType':1 , 'status': 'STATUS_SUBSCRIBED'}"
        const token = "Bearer {$token}"

document.addEventListener("DOMContentLoaded", () => {
          const accountTotal = document.getElementById("accounts");
fetch(url , option)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            return (accountTotal.textContent = data);})
          .catch((error) => {
            console.error("Error fetching user count:", error);
            accountTotal.textContent = "Error";
          });
        });