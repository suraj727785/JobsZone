/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      firstName
      lastName
      age
      sex
      email
      mobileNo
      address
      collegeName
      userRole
      degree
      branch
      courseCompletion
      collegeAddress
      resumeFile
      hireQuestion
      jobApplicant {
        items {
          id
          userID
          jobID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      firstName
      lastName
      age
      sex
      email
      mobileNo
      address
      collegeName
      userRole
      degree
      branch
      courseCompletion
      collegeAddress
      resumeFile
      hireQuestion
      jobApplicant {
        items {
          id
          userID
          jobID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      firstName
      lastName
      age
      sex
      email
      mobileNo
      address
      collegeName
      userRole
      degree
      branch
      courseCompletion
      collegeAddress
      resumeFile
      hireQuestion
      jobApplicant {
        items {
          id
          userID
          jobID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateJobApplicant = /* GraphQL */ `
  subscription OnCreateJobApplicant {
    onCreateJobApplicant {
      id
      userID
      jobID
      user {
        id
        firstName
        lastName
        age
        sex
        email
        mobileNo
        address
        collegeName
        userRole
        degree
        branch
        courseCompletion
        collegeAddress
        resumeFile
        hireQuestion
        jobApplicant {
          nextToken
        }
        createdAt
        updatedAt
      }
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateJobApplicant = /* GraphQL */ `
  subscription OnUpdateJobApplicant {
    onUpdateJobApplicant {
      id
      userID
      jobID
      user {
        id
        firstName
        lastName
        age
        sex
        email
        mobileNo
        address
        collegeName
        userRole
        degree
        branch
        courseCompletion
        collegeAddress
        resumeFile
        hireQuestion
        jobApplicant {
          nextToken
        }
        createdAt
        updatedAt
      }
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteJobApplicant = /* GraphQL */ `
  subscription OnDeleteJobApplicant {
    onDeleteJobApplicant {
      id
      userID
      jobID
      user {
        id
        firstName
        lastName
        age
        sex
        email
        mobileNo
        address
        collegeName
        userRole
        degree
        branch
        courseCompletion
        collegeAddress
        resumeFile
        hireQuestion
        jobApplicant {
          nextToken
        }
        createdAt
        updatedAt
      }
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateJob = /* GraphQL */ `
  subscription OnCreateJob {
    onCreateJob {
      id
      jobUserId
      jobName
      jobTitle
      jobType
      companyName
      comapanyWebsite
      aboutCompany
      experience
      duration
      salary
      noOfPosition
      jobLocation
      lastDate
      jobDescription {
        items {
          id
          content
          createdAt
          jobID
          updatedAt
        }
        nextToken
      }
      jobCretaria {
        items {
          id
          content
          createdAt
          jobID
          updatedAt
        }
        nextToken
      }
      jobSkills {
        items {
          id
          content
          createdAt
          jobID
          updatedAt
        }
        nextToken
      }
      perks {
        items {
          id
          content
          createdAt
          jobID
          updatedAt
        }
        nextToken
      }
      jobApplicants {
        items {
          id
          userID
          jobID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateJob = /* GraphQL */ `
  subscription OnUpdateJob {
    onUpdateJob {
      id
      jobUserId
      jobName
      jobTitle
      jobType
      companyName
      comapanyWebsite
      aboutCompany
      experience
      duration
      salary
      noOfPosition
      jobLocation
      lastDate
      jobDescription {
        items {
          id
          content
          createdAt
          jobID
          updatedAt
        }
        nextToken
      }
      jobCretaria {
        items {
          id
          content
          createdAt
          jobID
          updatedAt
        }
        nextToken
      }
      jobSkills {
        items {
          id
          content
          createdAt
          jobID
          updatedAt
        }
        nextToken
      }
      perks {
        items {
          id
          content
          createdAt
          jobID
          updatedAt
        }
        nextToken
      }
      jobApplicants {
        items {
          id
          userID
          jobID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteJob = /* GraphQL */ `
  subscription OnDeleteJob {
    onDeleteJob {
      id
      jobUserId
      jobName
      jobTitle
      jobType
      companyName
      comapanyWebsite
      aboutCompany
      experience
      duration
      salary
      noOfPosition
      jobLocation
      lastDate
      jobDescription {
        items {
          id
          content
          createdAt
          jobID
          updatedAt
        }
        nextToken
      }
      jobCretaria {
        items {
          id
          content
          createdAt
          jobID
          updatedAt
        }
        nextToken
      }
      jobSkills {
        items {
          id
          content
          createdAt
          jobID
          updatedAt
        }
        nextToken
      }
      perks {
        items {
          id
          content
          createdAt
          jobID
          updatedAt
        }
        nextToken
      }
      jobApplicants {
        items {
          id
          userID
          jobID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePerk = /* GraphQL */ `
  subscription OnCreatePerk {
    onCreatePerk {
      id
      content
      createdAt
      jobID
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdatePerk = /* GraphQL */ `
  subscription OnUpdatePerk {
    onUpdatePerk {
      id
      content
      createdAt
      jobID
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onDeletePerk = /* GraphQL */ `
  subscription OnDeletePerk {
    onDeletePerk {
      id
      content
      createdAt
      jobID
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onCreateJobDescription = /* GraphQL */ `
  subscription OnCreateJobDescription {
    onCreateJobDescription {
      id
      content
      createdAt
      jobID
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdateJobDescription = /* GraphQL */ `
  subscription OnUpdateJobDescription {
    onUpdateJobDescription {
      id
      content
      createdAt
      jobID
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onDeleteJobDescription = /* GraphQL */ `
  subscription OnDeleteJobDescription {
    onDeleteJobDescription {
      id
      content
      createdAt
      jobID
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onCreateJobCretaria = /* GraphQL */ `
  subscription OnCreateJobCretaria {
    onCreateJobCretaria {
      id
      content
      createdAt
      jobID
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdateJobCretaria = /* GraphQL */ `
  subscription OnUpdateJobCretaria {
    onUpdateJobCretaria {
      id
      content
      createdAt
      jobID
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onDeleteJobCretaria = /* GraphQL */ `
  subscription OnDeleteJobCretaria {
    onDeleteJobCretaria {
      id
      content
      createdAt
      jobID
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onCreateJobSkill = /* GraphQL */ `
  subscription OnCreateJobSkill {
    onCreateJobSkill {
      id
      content
      createdAt
      jobID
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdateJobSkill = /* GraphQL */ `
  subscription OnUpdateJobSkill {
    onUpdateJobSkill {
      id
      content
      createdAt
      jobID
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onDeleteJobSkill = /* GraphQL */ `
  subscription OnDeleteJobSkill {
    onDeleteJobSkill {
      id
      content
      createdAt
      jobID
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onCreateJobCount = /* GraphQL */ `
  subscription OnCreateJobCount {
    onCreateJobCount {
      id
      count
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateJobCount = /* GraphQL */ `
  subscription OnUpdateJobCount {
    onUpdateJobCount {
      id
      count
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteJobCount = /* GraphQL */ `
  subscription OnDeleteJobCount {
    onDeleteJobCount {
      id
      count
      createdAt
      updatedAt
    }
  }
`;
