-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`school`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`school` (
  `school_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `create_time` TIMESTAMP NOT NULL,
  `update_time` TIMESTAMP NOT NULL,
  PRIMARY KEY (`school_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `surname` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(32) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  `school_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `school_id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_user_school_idx` (`school_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_school`
    FOREIGN KEY (`school_id`)
    REFERENCES `mydb`.`school` (`school_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`role` (
  `role_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `create_time` TIMESTAMP NOT NULL,
  `create_time` TIMESTAMP NOT NULL,
  PRIMARY KEY (`role_id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE);


-- -----------------------------------------------------
-- Table `mydb`.`subject`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`subject` (
  `subject_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  PRIMARY KEY (`subject_id`));


-- -----------------------------------------------------
-- Table `mydb`.`class`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`class` (
  `class_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  PRIMARY KEY (`class_id`));


-- -----------------------------------------------------
-- Table `mydb`.`student`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`student` (
  `student_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `surname` VARCHAR(255) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  PRIMARY KEY (`student_id`));


-- -----------------------------------------------------
-- Table `mydb`.`user_role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user_role` (
  `user_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  `start_date` TIMESTAMP NOT NULL,
  `end_date` TIMESTAMP NOT NULL,
  PRIMARY KEY (`user_id`, `role_id`),
  INDEX `fk_user_has_role_role1_idx` (`role_id` ASC) VISIBLE,
  INDEX `fk_user_has_role_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_role_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_role_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `mydb`.`role` (`role_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`teacher_subject`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`teacher_subject` (
  `teacher_subject_id` INT NOT NULL AUTO_INCREMENT,
  `teacher_id` INT NOT NULL,
  `subject_id` INT NOT NULL,
  `start_date` TIMESTAMP NOT NULL,
  `end_date` TIMESTAMP NOT NULL,
  INDEX `fk_user_has_subject_subject1_idx` (`subject_id` ASC) VISIBLE,
  INDEX `fk_user_has_subject_user1_idx` (`teacher_id` ASC) VISIBLE,
  PRIMARY KEY (`teacher_subject_id`),
  CONSTRAINT `fk_user_has_subject_user1`
    FOREIGN KEY (`teacher_id`)
    REFERENCES `mydb`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_subject_subject1`
    FOREIGN KEY (`subject_id`)
    REFERENCES `mydb`.`subject` (`subject_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`class_teacher`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`class_teacher` (
  `teacher_id` INT NOT NULL,
  `class_id` INT NOT NULL,
  `start_date` TIMESTAMP NOT NULL,
  `end_date` TIMESTAMP NOT NULL,
  PRIMARY KEY (`teacher_id`),
  INDEX `fk_user_has_class_class1_idx` (`class_id` ASC) VISIBLE,
  INDEX `fk_user_has_class_user1_idx` (`teacher_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_class_user1`
    FOREIGN KEY (`teacher_id`)
    REFERENCES `mydb`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_class_class1`
    FOREIGN KEY (`class_id`)
    REFERENCES `mydb`.`class` (`class_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`class_has_subject`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`class_has_subject` (
  `class_id` INT NOT NULL,
  `subject_id` INT NOT NULL,
  `teacher_id` INT NOT NULL,
  `start_date` TIMESTAMP NOT NULL,
  `end_date` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`class_id`),
  INDEX `fk_class_has_subject_subject1_idx` (`subject_id` ASC) VISIBLE,
  INDEX `fk_class_has_subject_class1_idx` (`class_id` ASC) VISIBLE,
  INDEX `fk_class_has_subject_user1_idx` (`teacher_id` ASC) VISIBLE,
  CONSTRAINT `fk_class_has_subject_class1`
    FOREIGN KEY (`class_id`)
    REFERENCES `mydb`.`class` (`class_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_class_has_subject_subject1`
    FOREIGN KEY (`subject_id`)
    REFERENCES `mydb`.`subject` (`subject_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_class_has_subject_user1`
    FOREIGN KEY (`teacher_id`)
    REFERENCES `mydb`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`class_student`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`class_student` (
  `start_date` TIMESTAMP NOT NULL,
  `end_date` TIMESTAMP NOT NULL,
  `class_id` INT NOT NULL,
  `student_id` INT NOT NULL,
  PRIMARY KEY (`class_id`),
  INDEX `fk_template 4_student1_idx` (`student_id` ASC) VISIBLE,
  CONSTRAINT `fk_template 4_class1`
    FOREIGN KEY (`class_id`)
    REFERENCES `mydb`.`class` (`class_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_template 4_student1`
    FOREIGN KEY (`student_id`)
    REFERENCES `mydb`.`student` (`student_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`template 4`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`template 4` (
  `start_date` TIMESTAMP NOT NULL,
  `end_date` TIMESTAMP NOT NULL);


-- -----------------------------------------------------
-- Table `mydb`.`exam`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`exam` (
  `exam_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `start_date` TIMESTAMP NOT NULL,
  `end_date` TIMESTAMP NOT NULL DEFAULT NULL,
  `status` TINYINT NOT NULL DEFAULT 0,
  `school_id` INT NOT NULL,
  PRIMARY KEY (`exam_id`),
  INDEX `fk_exam_school1_idx` (`school_id` ASC) VISIBLE,
  CONSTRAINT `fk_exam_school1`
    FOREIGN KEY (`school_id`)
    REFERENCES `mydb`.`school` (`school_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`exam_result`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`exam_result` (
  `exam_result_id` INT NOT NULL AUTO_INCREMENT,
  `student_id` INT NOT NULL,
  `teacher_subject_id` INT NOT NULL,
  `exam_id` INT NOT NULL,
  `exam_mark` DECIMAL(5,2) NULL,
  `grade` CHAR(1) NULL,
  `teachers_remark` VARCHAR(255) NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  PRIMARY KEY (`exam_result_id`),
  INDEX `fk_exam_result_exam1_idx` (`exam_id` ASC) VISIBLE,
  INDEX `fk_exam_result_teacher_subject1_idx` (`teacher_subject_id` ASC) VISIBLE,
  INDEX `fk_exam_result_student1_idx` (`student_id` ASC) VISIBLE,
  CONSTRAINT `fk_exam_result_exam1`
    FOREIGN KEY (`exam_id`)
    REFERENCES `mydb`.`exam` (`exam_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_exam_result_teacher_subject1`
    FOREIGN KEY (`teacher_subject_id`)
    REFERENCES `mydb`.`teacher_subject` (`teacher_subject_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_exam_result_student1`
    FOREIGN KEY (`student_id`)
    REFERENCES `mydb`.`student` (`student_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`report`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`report` (
  `student_id` INT NOT NULL,
  `exam_id` INT NOT NULL,
  `class_teachers_remark` VARCHAR(255) NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  PRIMARY KEY (`student_id`, `exam_id`),
  INDEX `fk_report_student1_idx` (`student_id` ASC) VISIBLE,
  INDEX `fk_report_exam1_idx` (`exam_id` ASC) VISIBLE,
  CONSTRAINT `fk_report_student1`
    FOREIGN KEY (`student_id`)
    REFERENCES `mydb`.`student` (`student_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_report_exam1`
    FOREIGN KEY (`exam_id`)
    REFERENCES `mydb`.`exam` (`exam_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`exam_registration_progress`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`exam_registration_progress` (
  `exam_id` INT NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `current_step` INT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  PRIMARY KEY (`exam_id`),
  INDEX `fk_exam_registration_progress_exam1_idx` (`exam_id` ASC) VISIBLE,
  CONSTRAINT `fk_exam_registration_progress_exam1`
    FOREIGN KEY (`exam_id`)
    REFERENCES `mydb`.`exam` (`exam_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
