# CI/CD Demo: Deploy Static Website to AWS S3 using GitHub Actions

## Project Overview
This project demonstrates a simple CI/CD pipeline using GitHub Actions to automatically deploy a static website to AWS S3 whenever code is pushed to the GitHub repository.

---

## Technologies Used
- GitHub Actions
- AWS S3 (Static Website Hosting)
- AWS IAM
- YAML
- HTML / CSS

---

## CI/CD Workflow
1. Code is pushed to the `main` branch
2. GitHub Actions workflow is triggered
3. Repository code is checked out
4. AWS credentials are configured using GitHub Secrets
5. Static files are synced to the S3 bucket
6. Website is deployed automatically

---

## Project Structure
.
├── index.html
├── style.css
├── script.js
└── .github/
└── workflows/
└── deploy.yml


---

## AWS Configuration
- IAM user created with programmatic access
- Required S3 permissions attached
- GitHub Secrets configured:
  - `AWS_ACCESS_KEY_ID`
  - `AWS_SECRET_ACCESS_KEY`

---

## S3 Configuration
- S3 bucket created for static website hosting
- Public read access enabled using bucket policy
- Static website hosting enabled

---

## Outcome
- Automatic deployment on every push
- No manual upload required
- Live static website hosted on AWS S3

---

## Learning Outcome
- Understood CI/CD fundamentals
- Hands-on experience with GitHub Actions
- Learned secure credential management
- Learned automated deployment to AWS S3

---

## S3 Bucket Policy
The following bucket policy is used to allow public read access for static website hosting:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
    }
  ]
}


