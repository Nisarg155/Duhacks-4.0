const MaterialUpload = (event,name) => {
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${emailTitle}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
      body {
        font-family: 'Poppins', sans-serif;
      }
    </style>
  </head>
  <body class="bg-gray-50">
    <div class="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg my-6">
      <!-- Header with Logo -->
      <div class="flex items-center justify-between border-b pb-4"> 
        <img src="${event.logoUrl}" alt="EduPlatform Logo" class="h-10"/>
        <p class="text-xs text-gray-500">${event.currentDateTime}</p>
      </div>

      <!-- Email Title -->
      <h1 class="text-2xl font-bold text-blue-800 mt-6">New Learning Material Uploaded - ${subjectName}!</h1>
      
      <!-- Greeting -->
      <p class="mt-4 text-gray-700">Dear ${name},</p>
      
      <!-- Main Content -->
      <div class="mt-4 space-y-3 text-gray-600 text-sm">
        <p>You have successfully joined ${className}.
</p>
        
        <!-- Dynamic Content Section -->
        <div class="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <h2 class="text-lg font-semibold text-blue-800 mb-3">${event.contentTitle}</h2>
          
          <!-- Dynamic Fields -->
          
        </div>
      </div>
      
      <!-- Call to Action -->
      <div class="mt-6 text-center">
        <a href="${event.ctaLink}" 
           class="inline-block px-6 py-2 bg-orange-500 text-white text-sm font-semibold rounded-md shadow-md hover:bg-orange-600 transition duration-300">
          ${event.ctaText}
        </a>
      </div>
      
      <!-- Additional Info -->
      <p class="mt-6 text-gray-600 text-xs">
        If you have any questions, please don't hesitate to contact our support team.
      </p>
      
      <!-- Footer -->
      <div class="mt-8 pt-4 border-t">
        <div class="text-center">
          <p class="text-blue-800 font-semibold text-sm mb-1">Your Education Platform</p>
          <p class="text-gray-500 text-xs">${event.companyAddress}</p>
        </div>
        
        <!-- Legal Disclaimer -->
        <div class="mt-4 text-[10px] text-gray-400 text-center">
          <p>This email was sent to ${name}. If you didn't request this email, please ignore it.</p>
          <p class="mt-1">IMPORTANT: This email is intended only for the recipient(s) named above. It may contain confidential 
          or privileged information. If you are not the intended recipient, please notify us immediately and delete this email.</p>
          <p class="mt-1">Always verify the sender's email address and be cautious of phishing attempts. 
          We are not responsible for any actions taken based on fraudulent emails impersonating our platform.</p>
        </div>
      </div>
    </div>
  </body>
</html>
    `
}

module.exports = MaterialUpload;